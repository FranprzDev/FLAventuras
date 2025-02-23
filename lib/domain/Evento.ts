import { ESTADO_EVALUACION } from "./enum/Evento/ESTADO_EVALUACION";
import { ESTADO_INSCRIPCION } from "./enum/Evento/ESTADO_INSCRIPCION";
import Gasto from "./Gasto";
import Inscripcion from "./Inscripcion";

class Evento {
    private _nombre: string;
    private _id: number;
    private _descripcion: string;
    private _fecha: Date;
    private _ubicacion: string;
    private _cupo: number;
    private _inscripciones: Inscripcion[];
    private _gastos: Gasto[];
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
    ) {
        this._nombre = nombre;
        this._id = id;
        this._descripcion = descripcion;
        this._fecha = fecha;
        this._ubicacion = ubicacion;
        this._cupo = cupo;
        this._inscripciones = [];
        this._gastos = [];
        this._ESTADO_INSCRIPCION = ESTADO_INSCRIPCION.ABIERTO;
        this._ESTADO_EVALUACION = ESTADO_EVALUACION.EN_PROCESO;
        this._created_at = created_at;
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

    public get inscripciones(): Inscripcion[] {
        return this._inscripciones;
    }

    public set inscripciones(value: Inscripcion[]) {
        this._inscripciones = value;
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