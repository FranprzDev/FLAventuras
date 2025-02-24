import { personaParaTestear } from "@/lib/constants";
import { ESTADO_INSCRIPCION } from "@/lib/domain/enum/Evento/ESTADO_INSCRIPCION";
import Evento from "@/lib/domain/Evento";
import Repositorio from "@/lib/infraestructure/Repositorio";
import SingletonSesion from "@/lib/transversal/Auth/Sesion";
import { FileManager } from "@/lib/transversal/FileManagment/FileManager";
import { supabase } from "@/lib/transversal/Supabase/supabase";
import type { EventoResponseAPI } from "@/types/domain";
import { DomainException } from "@/types/DomainException";

class GestorInscripcion {
  constructor() {}

  async SubirDocumento(documento: File) {
    const urlDocumento = await FileManager.getInstance().uploadFile(
          documento,
          "uploads/private/authorizations"
    );

    return urlDocumento;
  }

  async Inscripcion(idEvento: number, autorizacionUrl: string) {
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
      eventDb.estado_inscripciones as ESTADO_INSCRIPCION
    );

    // Las siguientes 2 condiciones protegen el acceso a la inscripción de un evento
    // en el caso de que las precondiciones no se cumplan.
    // const dniPerson = `${SingletonSesion.getInstance().obtenerPersona()?.getDni()}`;
    // const inscEx = await ev.checkearInscripcion(dniPerson);

    // if (inscEx) {
    //   throw new DomainException("Ya se encuentra inscripto en este evento.", 400);
    // }

    // if(ev.ESTADO_INSCRIPCION === ESTADO_INSCRIPCION.CERRADO)
    //   throw new DomainException("Las inscripciones para este evento se encuentran cerradas.", 400);

    const c = await ev.hayCupos();

    if (c === false) {
      throw new DomainException("No hay cupos disponibles para este evento.", 404);
    } 

    const idInscripcion = await Repo.getLastIndex("Inscripcion");
    ev.agregarInscripcion(idInscripcion, autorizacionUrl);
  }

  confirmarBaja() {
    throw new DomainException("Método no implementado", 404);
  }

  listarInscriptos() {
    throw new DomainException("Método no implementado", 404);
  }
}

export default GestorInscripcion;
