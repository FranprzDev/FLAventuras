import Autorizacion from "./Autorizacion";

class Inscripcion {
    private fechaInscripcion: Date;
    private codigo: number;
    private estaActiva: boolean;
    private motivoBaja: string;
    private fechaBaja: Date;
    private autorizacion: Autorizacion | null;

    constructor(fechaInscripcion: Date, codigo: number, estaActiva: boolean, motivoBaja: string, fechaBaja: Date, documentoAutorizacion: string | null = null) {
        this.fechaInscripcion = fechaInscripcion;
        this.codigo = codigo;
        this.estaActiva = estaActiva;
        this.motivoBaja = motivoBaja;
        this.fechaBaja = fechaBaja;
        this.autorizacion = this.crearAutorizacion(documentoAutorizacion);
    }

    private crearAutorizacion(documentoAutorizacion: string | null): Autorizacion | null {
        if(documentoAutorizacion === null) return null;

        return new Autorizacion(documentoAutorizacion);
    }

    public getFechaInscripcion(): Date {
        return this.fechaInscripcion;
    }

    public setFechaInscripcion(fechaInscripcion: Date): void {
        this.fechaInscripcion = fechaInscripcion;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getEstaActiva(): boolean {
        return this.estaActiva;
    }

    public setEstaActiva(estaActiva: boolean): void {
        this.estaActiva = estaActiva;
    }

    public getMotivoBaja(): string {
        return this.motivoBaja;
    }

    public setMotivoBaja(motivoBaja: string): void {
        this.motivoBaja = motivoBaja;
    }

    public getFechaBaja(): Date {
        return this.fechaBaja;
    }

    public setFechaBaja(fechaBaja: Date): void {
        this.fechaBaja = fechaBaja;
    }

    public getAutorizacion(): Autorizacion | null {
        return this.autorizacion;
    }

    public setAutorizacion(autorizacion: Autorizacion | null): void {
        this.autorizacion = autorizacion;
    }

    public crear(object: any, string: string): void {
        // TODO document why this method 'crear' is empty
    }

    public anular(string: string): void {
        // TODO document why this method 'anular' is empty
    }
}

export default Inscripcion;