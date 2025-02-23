import { ESTADO_INSCRIPCION } from "@/lib/domain/enum/Evento/ESTADO_INSCRIPCION";
import Evento from "@/lib/domain/Evento";
import Repositorio from "@/lib/infraestructure/Repositorio";
import { uploadFile } from "@/lib/transversal/FileManagment/upload";
import { supabase } from "@/lib/transversal/Supabase/supabase";
import type { EventoResponseAPI } from "@/types/domain";

class GestorInscripcion {
  constructor() {}

  async Inscripcion(idEvento: number, autorizacion: File | null) {
    const PDF_DIR = "uploads/private/authorizations";
    let documento = "";

    if (autorizacion) {
      documento = await uploadFile(autorizacion, PDF_DIR);
    }

    const Repo = Repositorio.getInstance<EventoResponseAPI>(supabase);
    const eventDb = await Repo.getById("Evento", idEvento);
    if (!eventDb) return new Error("Evento no encontrado");
    const ev = new Evento(
      eventDb.id,
      eventDb.nombre,
      eventDb.descripcion,
      new Date(eventDb.fecha),
      eventDb.cupo,
      eventDb.ubicacion,
      new Date(eventDb.created_at),
      eventDb.estado_inscripciones as ESTADO_INSCRIPCION
    );

    if (ev.ESTADO_INSCRIPCION !== ESTADO_INSCRIPCION.ABIERTO)
      return new Error("No hay cupos.");

    const c = ev.hayCupos();

    if (c === false) return new Error("No hay cupos.");

    const idInscripcion = await Repo.getLastIndex("Inscripcion");
    ev.agregarInscripcion(idInscripcion, documento);
  }

  confirmarBaja(arg0: string, arg1: number, arg2: number) {
    throw new Error("Method not implemented.");
  }

  listarInscriptos(arg0: number) {
    throw new Error("Method not implemented.");
  }
}

export default GestorInscripcion;
