import Repositorio from "../infraestructure/Repositorio";
import { supabase } from "../transversal/Supabase/supabase";

class Autorizacion {
    private documento: string | null;
    private created_at: Date
    private id: number

    constructor(idAutorizacion: number,documento: string | null) {
        this.id = idAutorizacion
        this.documento = documento;
        this.created_at = new Date()

        // this.guardarAutorizacion()
    }

    // private async guardarAutorizacion() {
    //     this.Repo.create("Autorizacion", this)
    // }

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