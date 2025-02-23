import Persona from "./Persona/Persona";

class SingletonSesion {
  private static instance: SingletonSesion;
  private persona: Persona | null = null;
  private constructor(persona: Persona) {
    this.persona = persona
  }
  public static getInstance(persona: Persona): SingletonSesion {
    if (!SingletonSesion.instance) {
      SingletonSesion.instance = new SingletonSesion(persona);
    }
    return SingletonSesion.instance;
  }
  setPersona(persona: Persona) {
    this.persona = persona;
  }
  obtenerPersona(): Persona | null {
    return this.persona;
  }
}

export default SingletonSesion;
