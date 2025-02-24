import GestorInscripcion from "../Gestores/GestorInscripcion";

class ControladorInscripcionAEvento {
  
  private GestorInscripcion;

  constructor() {
    this.GestorInscripcion = new GestorInscripcion();
  }

  public async SubirDocumento(documento: File) {
    const url = await this.GestorInscripcion.SubirDocumento(documento);
    return url;
  }

  public async Inscripcion(idEvento: number, autorizacionUrl: string) {
      await this.GestorInscripcion.Inscripcion(idEvento, autorizacionUrl);
  }
}

export default ControladorInscripcionAEvento;
