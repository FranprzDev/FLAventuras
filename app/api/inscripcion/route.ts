import ControladorInscripcionAEvento from "@/lib/application/Controladores/ControladorInscripcionAEvento";
import { personaMayor, personaMenor } from "@/lib/constants";
import SingletonSesion from "@/lib/domain/Sesion";
import { NextResponse } from "next/server";

async function POST() {
  const esMayorDeEdad = true
  const idEvento = 2

  if(esMayorDeEdad) {
    SingletonSesion.getInstance(personaMayor)
  } else {
    SingletonSesion.getInstance(personaMenor)
  }

  const autorizacion = new File([""], "autorizacion.txt", { type: "text/plain" }) ?? null;
  const controlador : ControladorInscripcionAEvento = new ControladorInscripcionAEvento();
  controlador.Inscripcion(idEvento, autorizacion);

  return new NextResponse("Se creo correctamente la autorización", { status: 201 });
}


export { POST };
