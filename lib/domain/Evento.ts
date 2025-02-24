import { AutorizacionResponseAPI, EventoResponseAPI } from "@/types/domain";
import Repositorio from "../infraestructure/Repositorio";
import { supabase } from "../transversal/Supabase/supabase";
import { ESTADO_EVALUACION } from "./enum/Evento/ESTADO_EVALUACION";
import { ESTADO_INSCRIPCION } from "./enum/Evento/ESTADO_INSCRIPCION";
import Gasto from "./Gasto";
import Inscripcion from "./Inscripcion";
import SingletonSesion from "../transversal/Auth/Sesion";
import { personaParaTestear } from "../constants";

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

    // public async checkearInscripcion(dni: string): Promise<boolean> {
    //     const Repo = Repositorio.getInstance<EventoResponseAPI>(supabase);
    //     const inscEx = await Repo.findPersonByDNI("Inscripcion", `${SingletonSesion.getInstance(personaParaTestear).obtenerPersona()?.getDni()}`);
    //     return inscEx
    // }

    public async agregarInscripcion(idInscripcion: number, documento: string) {
            const Repo = Repositorio.getInstance(supabase);
            const idAutorizacion = await Repo.getLastIndex("Autorizacion");
            const i : Inscripcion = new Inscripcion(idInscripcion, new Date(), true, idAutorizacion, documento)
    
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
    
            const autorizacionObj = i.getAutorizacion()
    
            if(autorizacionObj) {
                await Repo.create("Autorizacion", {
                    ...autorizacionObj,
                    fk_inscripcion: i.getId()
                });
            }

    }


    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get codigo(): number {
        return this._id;
    }

    public get descripcion(): string {
        return this._descripcion;
    }

    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get fecha(): Date {
        return this._fecha;
    }

    public set fecha(value: Date) {
        this._fecha = value;
    }

    public get ubicacion(): string {
        return this._ubicacion;
    }

    public set ubicacion(value: string) {
        this._ubicacion = value;
    }

    public get cupo(): number {
        return this._cupo;
    }

    public set cupo(value: number) {
        this._cupo = value;
    }

    // public get inscripciones(): Inscripcion[] {
    //     return this._inscripciones;
    // }

    // public set inscripciones(value: Inscripcion[]) {
    //     this._inscripciones = value;
    // }

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