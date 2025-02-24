import ControladorInscripcionAEvento from "@/lib/application/Controladores/ControladorInscripcionAEvento";
import { personaParaTestear } from "@/lib/constants";
import SingletonSesion from "@/lib/transversal/Auth/Sesion";
import { DomainException } from "@/types/DomainException";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const idEvento = Number(url.searchParams.get("idEvento"));
  SingletonSesion.getInstance().setPersona(personaParaTestear);

  try {
    if (isNaN(idEvento))
      throw new DomainException("El id del evento debe ser un número", 408);

    const formData = await req.json();
    const autorizacionUrl = formData?.autorizacionUrl;
    const controlador: ControladorInscripcionAEvento =
      new ControladorInscripcionAEvento();
    await controlador.Inscripcion(Number(idEvento), autorizacionUrl);


    return NextResponse.json({ message: "Inscripción realizada" }, { status: 201 });
  } catch (err) {
    const error = err as DomainException;
    return NextResponse.json({ message: error?.message }, {
      status: error?.statusCode ?? 500,
    });
  }
}

export { POST };
