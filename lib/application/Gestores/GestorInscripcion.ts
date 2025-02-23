import Evento from "@/lib/domain/Evento";
import Repositorio from "@/lib/infraestructure/Repositorio";
import type { EventoResponseAPI } from "@/types/domain";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://cxsdwkqjqhtdwmvrpvjy.supabase.co"
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4c2R3a3FqcWh0ZHdtdnJwdmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODk2MTIsImV4cCI6MjA1MTE2NTYxMn0.qNXxPHxFm0EgDgbdaSftn4rXOkMpSIF0tZRighV3sys"
const supabase = createClient(supabaseUrl, supabaseKey)


class GestorInscripcion {

  constructor () {}
  
  async Inscripcion(idEvento: number, autorizacion: File | null) {
    const Repo = new Repositorio<EventoResponseAPI>(supabase)
    const eventDb = await Repo.getById('Evento', idEvento)
    if(!eventDb) return new Error('Evento no encontrado') 
    const ev = new Evento(
      eventDb.id,
      eventDb.nombre,
      eventDb.descripcion,
      new Date(eventDb.fecha),
      eventDb.cupo,
      eventDb.ubicacion,
      new Date(eventDb.created_at)
    )
    
    

  }

  // private obtenerEvento(idEvento: number)  {
  //   return Repositorio.getInstance(supabase).getById('eventos', idEvento)
  // }

  confirmarBaja(arg0: string, arg1: number, arg2: number) {
    throw new Error("Method not implemented.");
  }

  listarInscriptos(arg0: number) {
    throw new Error("Method not implemented.");
  }
}

export default GestorInscripcion