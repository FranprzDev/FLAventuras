class Autorizacion {
    documento: string;

    constructor(documento: string) {
        this.documento = documento;
    }

    static crear(documento: string): Autorizacion {
        return new Autorizacion(documento);
    }

    get getDocumento(): string {
        return this.documento
    }

    set setDocumento(documento: string) {
        this.documento = documento;
    }
}

export default Autorizacion;