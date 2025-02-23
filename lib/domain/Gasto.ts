import { DomainException } from "@/types/DomainException";
import { CATEGORIA } from "./enum/Gasto/CATEGORIA";
import { ESTADO } from "./enum/Gasto/ESTADO";

class Gasto {
    private concepto: string;
    private monto: number;
    private fecha: Date;
    private motivoRechazo: string;
    private codigo: number;
    private categoria: CATEGORIA;
    private estado: ESTADO;

    constructor(concepto: string, monto: number, fecha: Date, motivoRechazo: string, codigo: number, categoria: CATEGORIA, estado: ESTADO) {
        this.concepto = concepto;
        this.monto = monto;
        this.fecha = fecha;
        this.motivoRechazo = motivoRechazo;
        this.codigo = codigo;
        this.categoria = categoria;
        this.estado = estado
    }

    public getConcepto(): string {
        return this.concepto;
    }

    public setConcepto(concepto: string): void {
        this.concepto = concepto;
    }

    public getMonto(): number {
        return this.monto;
    }

    public setMonto(monto: number): void {
        this.monto = monto;
    }

    public getFecha(): Date {
        return this.fecha;
    }

    public setFecha(fecha: Date): void {
        this.fecha = fecha;
    }

    public getMotivoRechazo(): string {
        return this.motivoRechazo;
    }

    public setMotivoRechazo(motivoRechazo: string): void {
        this.motivoRechazo = motivoRechazo;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getCategoria(): CATEGORIA {
        return this.categoria
    }

    public setCategoria(categoria: CATEGORIA): void {
        this.categoria = categoria
    }

    public getEstado(): ESTADO {
        return this.estado
    }

    public setEstado(estado: ESTADO): void {
        this.estado = estado
    }

    static crear(): Gasto {
        throw new DomainException("Método no implementado", 404);
    }

    evaluar(): void {
        throw new DomainException("Método no implementado", 404);
    }
}

export default Gasto;