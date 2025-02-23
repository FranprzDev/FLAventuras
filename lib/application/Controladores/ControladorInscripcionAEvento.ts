import GestorInscripcion from "../Gestores/GestorInscripcion";

class ControladorInscripcionAEvento {
  
  private GestorInscripcion;

  constructor() {
    this.GestorInscripcion = new GestorInscripcion();
  }

  public Inscripcion(idEvento: number, autorizacion: File | null) {
    this.GestorInscripcion.Inscripcion(idEvento, autorizacion);
  }
}

export default ControladorInscripcionAEvento;
