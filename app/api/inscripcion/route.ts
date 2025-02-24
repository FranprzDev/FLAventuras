import ControladorInscripcionAEvento from "@/lib/application/Controladores/ControladorInscripcionAEvento";
import { DomainException } from "@/types/DomainException";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const idEvento = Number(url.searchParams.get('idEvento'));

  try {
    if(typeof idEvento !== "number") throw new DomainException("El id del evento debe ser un número", 408);

    const formData = await req.json();
    const autorizacionUrl = formData?.autorizacionUrl;
  
    const controlador : ControladorInscripcionAEvento = new ControladorInscripcionAEvento();
    controlador.Inscripcion(Number(idEvento), autorizacionUrl);
  
    return new NextResponse("Se creo correctamente la inscripción", { status: 201 });
  } catch (err) {
    console.log(err)
    const error = err as DomainException;
    return new NextResponse(error?.message, { status: error?.statusCode ?? 500 });
  }
}


export { POST };
