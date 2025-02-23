class Persona {
  Nombre: String;
  Apellido: String;
  dni: number;
  fechaNacimiento: Date;
  edad: number;
  localidad: String;
  codigoPostal: String;
  Mail: String;

  constructor(
    Nombre: String,
    Apellido: String,
    dni: number,
    fechaNacimiento: Date,
    edad: number,
    localidad: String,
    codigoPostal: String,
    Mail: String
  ) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.localidad = localidad;
    this.codigoPostal = codigoPostal;
    this.Mail = Mail;
  }

  getNombre(): String {
    return this.Nombre;
  }

  setNombre(Nombre: String): void {
    this.Nombre = Nombre;
  }

  getApellido(): String {
    return this.Apellido;
  }

  setApellido(Apellido: String): void {
    this.Apellido = Apellido;
  }

  getDni(): number {
    return this.dni;
  }

  setDni(dni: number): void {
    this.dni = dni;
  }

  getFechaNacimiento(): Date {
    return this.fechaNacimiento;
  }

  setFechaNacimiento(fechaNacimiento: Date): void {
    this.fechaNacimiento = fechaNacimiento;
  }

  getEdad(): number {
    return this.edad;
  }

  setEdad(edad: number): void {
    this.edad = edad;
  }

  getLocalidad(): String {
    return this.localidad;
  }

  setLocalidad(localidad: String): void {
    this.localidad = localidad;
  }

  getCodigoPostal(): String {
    return this.codigoPostal;
  }

  setCodigoPostal(codigoPostal: String): void {
    this.codigoPostal = codigoPostal;
  }

  getMail(): String {
    return this.Mail;
  }

  setMail(Mail: String): void {
    this.Mail = Mail;
  }
}

export default Persona;