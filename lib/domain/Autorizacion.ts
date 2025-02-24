class Autorizacion {
    private id: number;
    private documento: string;
    private created_at: Date;

    constructor(idAutorizacion: number) {
        this.id = idAutorizacion;
        this.created_at = new Date();
        this.documento = "";
    }

    public getId(): number {
        return this.id;
    }

    public getDocumento(): string | null {
        return this.documento;
    }

    public setDocumento(documento: string) {
        this.documento = documento;
    }
}

export default Autorizacion;