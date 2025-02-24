import Persona from "../../domain/Persona/Persona";

class SingletonSesion {
  private static instance: SingletonSesion;
  private persona: Persona;
  private constructor() {
    this.persona = {} as Persona;
   }
  public static getInstance(): SingletonSesion {
    if (!SingletonSesion.instance) {
      SingletonSesion.instance = new SingletonSesion();
    }
    return SingletonSesion.instance;
  }
  setPersona(persona: Persona) {
    this.persona = persona;
  }
  obtenerPersona(): Persona {
    return this.persona;
  }
}

export default SingletonSesion;
