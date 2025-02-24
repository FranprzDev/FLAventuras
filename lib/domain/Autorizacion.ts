class Autorizacion {
    private documento: string | null;
    private created_at: Date
    private id: number

    constructor(idAutorizacion: number,documento: string) {
        this.id = idAutorizacion
        this.documento = documento;
        this.created_at = new Date()
    }

    get getId(): number {
        return this.id
    }

    get getDocumento(): string | null {
        return this.documento
    }

    set setDocumento(documento: string) {
        this.documento = documento;
    }
}

export default Autorizacion;