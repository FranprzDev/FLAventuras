import { Persona } from "./Persona";

class Participante extends Persona {
  constructor(
    Nombre: String,
    Apellido: String,
    dni: number,
    fechaNacimiento: Date,
    edad: number,
    localidad: String,
    codigoPostal: String,
    Mail: String,
  ) {
    super(
      Nombre,
      Apellido,
      dni,
      fechaNacimiento,
      edad,
      localidad,
      codigoPostal,
      Mail
    );
  }
}

export default Participante;