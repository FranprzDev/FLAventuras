import Repositorio from "../infraestructure/Repositorio";
import { supabase } from "../transversal/Supabase/supabase";
import Inscripcion from "./Inscripcion";
import SingletonSesion from "../transversal/Auth/Sesion";
import { FileManager } from "../transversal/FileManagment/FileManager";
import Autorizacion from "./Autorizacion";
import { ESTADO } from "./enum/Evento/ESTADO";
import { DomainException } from "@/types/DomainException";

class Evento {
    private _nombre: string;
    private _id: number;
    private _descripcion: string;
    private _fecha: Date;
    private _ubicacion: string;
    private _cupo: number;

    private _estado: ESTADO;
    private _created_at: Date;

    constructor(
        id: number,
        nombre: string,
        descripcion: string,
        fecha: Date,
        cupo: number,
        ubicacion: string,
        created_at: Date = new Date(),
        _estado: ESTADO = ESTADO.ABIERTO,
    ) {
        this._nombre = nombre;
        this._id = id;
        this._descripcion = descripcion;
        this._fecha = fecha;
        this._ubicacion = ubicacion;
        this._cupo = cupo;
        this._estado = ESTADO.ABIERTO;
        this._created_at = created_at;
    }

    public async hayCupos(): Promise<boolean> {
        const numberInscripciones = await Repositorio.getInstance(supabase).getCount("Inscripcion");
        const c = this._cupo > numberInscripciones;
        return c;
    }

    public async agregarInscripcion(idInscripcion: number, documento: File | null) {
            if (
            SingletonSesion.getInstance().obtenerPersona().edad < 18 &&
            documento === null
            )
            throw new DomainException(
                "No se puede inscribir si no envias una autorización siendo menor de edad.",
                400
            );

            const c = await this.hayCupos();
            
            if (c === false) {
              throw new DomainException(
                "No hay cupos disponibles.",
                400
              );
            }
      

            const Repo = Repositorio.getInstance(supabase);
            const idAutorizacion = await Repo.getLastIndex("Autorizacion");
            const i : Inscripcion = new Inscripcion(idInscripcion, new Date(), idAutorizacion)

            let autObj: Autorizacion = i.getAutorizacion();

            if (documento && documento?.size > 0) {
                const fileUrl = await FileManager.getInstance().uploadFile(documento, "uploads/private/authorizations");
                autObj.setDocumento(fileUrl as string);
            }

            const session = SingletonSesion.getInstance().obtenerPersona()
    
            const sanitizedInscripcion = {
                fechaInscripcion: i.getFechaInscripcion(),
                id: i.getId(),
                estaActiva: i.getEstaActiva(),
                motivoBaja: i.getMotivoBaja(),
                fechaBaja: i.getFechaBaja(),
            }
    
            await Repo.create("Inscripcion", {
                ...sanitizedInscripcion,
                fk_evento: this._id,
                fk_persona: session?.getDni()
            });
        
            if(autObj && autObj.getDocumento() !== "") {
                await Repo.create("Autorizacion", {
                    ...autObj,
                    fk_inscripcion: i.getId()
                });
            }

    }


    public getNombre(): string {
        return this._nombre;
    }

    public setNombre(value: string) {
        this._nombre = value;
    }

    public getCodigo(): number {
        return this._id;
    }

    public getDescripcion(): string {
        return this._descripcion;
    }

    public setDescripcion(value: string) {
        this._descripcion = value;
    }

    public getFecha(): Date {
        return this._fecha;
    }

    public setFecha(value: Date) {
        this._fecha = value;
    }

    public getUbicacion(): string {
        return this._ubicacion;
    }

    public setUbicacion(value: string) {
        this._ubicacion = value;
    }

    public getCupo(): number {
        return this._cupo;
    }

    public setCupo(value: number) {
        this._cupo = value;
    }

    public get ESTADO(): ESTADO {
        return this._estado;
    }

    public set ESTADO_INSCRIPCION(value: ESTADO) {
        this._estado = value;
    }
}

export default Evento;