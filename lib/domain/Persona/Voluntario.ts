import { Rol } from "../enum/ROL";
import Persona from "./Persona";

class Voluntario extends Persona {
  rol: Rol;
  
  constructor(
    Nombre: String,
    Apellido: String,
    dni: number,
    fechaNacimiento: Date,
    edad: number,
    localidad: String,
    codigoPostal: String,
    Mail: String,
    rol: Rol
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
    this.rol = rol;
  }

  public getRol(): Rol {
    return this.rol;
  }

  public setRol(rol: Rol): void {
    this.rol = rol;
  }
}

export default Voluntario;