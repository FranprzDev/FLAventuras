class Comprobante {
    private documento: string;

    constructor(documento: string) {
        this.documento = documento;
    }

    public getDocumento(): string {
        return this.documento;
    }

    public setDocumento(documento: string): void {
        this.documento = documento;
    }

    public static crear(documento: string): Comprobante {
        return new Comprobante(documento);
    }
}

export default Comprobante;