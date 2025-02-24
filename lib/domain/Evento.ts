import { AutorizacionResponseAPI, EventoResponseAPI } from "@/types/domain";
import Repositorio from "../infraestructure/Repositorio";
import { supabase } from "../transversal/Supabase/supabase";
import { ESTADO_EVALUACION } from "./enum/Evento/ESTADO_EVALUACION";
import { ESTADO_INSCRIPCION } from "./enum/Evento/ESTADO_INSCRIPCION";
import Gasto from "./Gasto";
import Inscripcion from "./Inscripcion";
import SingletonSesion from "../transversal/Auth/Sesion";
import { personaParaTestear } from "../constants";
import { FileManager } from "../transversal/FileManagment/FileManager";
import Autorizacion from "./Autorizacion";

class Evento {
    private _nombre: string;
    private _id: number;
    private _descripcion: string;
    private _fecha: Date;
    private _ubicacion: string;
    private _cupo: number;
    // private _inscripciones: Inscripcion[];
    // private _gastos: Gasto[];
    private _ESTADO_INSCRIPCION: ESTADO_INSCRIPCION;
    private _ESTADO_EVALUACION: ESTADO_EVALUACION
    private _created_at: Date;

    constructor(
        id: number,
        nombre: string,
        descripcion: string,
        fecha: Date,
        cupo: number,
        ubicacion: string,
        created_at: Date = new Date(),
        estado_inscripcion: ESTADO_INSCRIPCION = ESTADO_INSCRIPCION.ABIERTO,
    ) {
        this._nombre = nombre;
        this._id = id;
        this._descripcion = descripcion;
        this._fecha = fecha;
        this._ubicacion = ubicacion;
        this._cupo = cupo;
        // this._inscripciones = [];
        // this._gastos = [];
        this._ESTADO_INSCRIPCION = estado_inscripcion;
        this._ESTADO_EVALUACION = ESTADO_EVALUACION.EN_PROCESO;
        this._created_at = created_at;
    }

    public async hayCupos(): Promise<boolean> {
        const numberInscripciones = await Repositorio.getInstance(supabase).getCount("Inscripcion");
        const c = this._cupo > numberInscripciones;
        return c;
    }

    public async agregarInscripcion(idInscripcion: number, documento: File | null) {
            const Repo = Repositorio.getInstance(supabase);
            const idAutorizacion = await Repo.getLastIndex("Autorizacion");
            const i : Inscripcion = new Inscripcion(idInscripcion, new Date(), idAutorizacion)

            let autObj: Autorizacion = i.getAutorizacion();

            if (documento !== null) {
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
        
            if(autObj) {
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

    public get ESTADO_INSCRIPCION(): ESTADO_INSCRIPCION {
        return this._ESTADO_INSCRIPCION;
    }

    public set ESTADO_INSCRIPCION(value: ESTADO_INSCRIPCION) {
        this._ESTADO_INSCRIPCION = value;
    }

    public get ESTADO_EVALUACION(): ESTADO_EVALUACION {
        return this._ESTADO_EVALUACION;
    }

    public set ESTADO_EVALUACION(value: ESTADO_EVALUACION) {
        this._ESTADO_EVALUACION = value;
    }
}

export default Evento;