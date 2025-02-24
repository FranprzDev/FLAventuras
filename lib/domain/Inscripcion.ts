import { DomainException } from "@/types/DomainException";
import Autorizacion from "./Autorizacion";
class Inscripcion {
  private fechaInscripcion: Date;
  private id: number;
  private estaActiva: boolean;
  private motivoBaja: string | null = null;
  private fechaBaja: Date | null = null;
  private autorizacion: Autorizacion;

  constructor(
    id: number,
    fechaInscripcion: Date,
    idAutorizacion: number,
  ) {
    this.fechaInscripcion = fechaInscripcion;
    this.id = id;
    this.estaActiva = true;
    this.autorizacion = new Autorizacion(idAutorizacion);
  }

  public getFechaInscripcion(): Date {
    return this.fechaInscripcion;
  }



  public setFechaInscripcion(fechaInscripcion: Date): void {
    this.fechaInscripcion = fechaInscripcion;
  }

  public getId(): number {
    return this.id;
  }

  public setId(codigo: number): void {
    this.id = codigo;
  }

  public getEstaActiva(): boolean {
    return this.estaActiva;
  }

  public setEstaActiva(estaActiva: boolean): void {
    this.estaActiva = estaActiva;
  }

  public getMotivoBaja(): string | null {
    return this.motivoBaja;
  }

  public setMotivoBaja(motivoBaja: string): void {
    this.motivoBaja = motivoBaja;
  }

  public getFechaBaja(): Date | null {
    return this.fechaBaja;
  }

  public setFechaBaja(fechaBaja: Date): void {
    this.fechaBaja = fechaBaja;
  }

  public getAutorizacion(): Autorizacion {
    return this.autorizacion;
  }

  public setAutorizacion(autorizacion: Autorizacion): void {
    this.autorizacion = autorizacion;
  }

  public crear(object: any, string: string): void {
    throw new DomainException("Método no implementado", 404);
  }

  public anular(string: string): void {
    throw new DomainException("Método no implementado", 404);
  }
}

export default Inscripcion;
