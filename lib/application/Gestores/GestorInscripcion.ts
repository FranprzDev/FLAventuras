import { ESTADO } from "@/lib/domain/enum/Evento/ESTADO";
import Evento from "@/lib/domain/Evento";
import Repositorio from "@/lib/infraestructure/Repositorio";
import SingletonSesion from "@/lib/transversal/Auth/Sesion";
import { supabase } from "@/lib/transversal/Supabase/supabase";
import type { EventoResponseAPI } from "@/types/domain";
import { DomainException } from "@/types/DomainException";

class GestorInscripcion {
  constructor() {}

  async inscripcion(idEvento: number, autorizacion: File | null) {
      const Repo = Repositorio.getInstance<EventoResponseAPI>(supabase);
      const eventDb = await Repo.getById("Evento", idEvento);
      if (!eventDb) throw new DomainException("Evento no encontrado", 404);

      const ev = new Evento(
        eventDb.id,
        eventDb.nombre,
        eventDb.descripcion,
        new Date(eventDb.fecha),
        eventDb.cupo,
        eventDb.ubicacion,
        new Date(eventDb.created_at),
        eventDb.estado_inscripciones as ESTADO
      );

      const idInscripcion = await Repo.getLastIndex("Inscripcion");
      ev.agregarInscripcion(idInscripcion, autorizacion);
  }

  public confirmarBaja() {
    throw new DomainException("Método no implementado", 404);
  }

  public listarInscriptos() {
    throw new DomainException("Método no implementado", 404);
  }
}

export default GestorInscripcion;
