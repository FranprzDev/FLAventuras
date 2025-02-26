import GestorInscripcion from "@/lib/application/Gestores/GestorInscripcion";
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
      throw new DomainException("El id del evento debe ser un número", 400);

    const formData = await req.formData();
    const autorizacionFile = formData?.get('autorizacionFile') as File;

    if (SingletonSesion.getInstance().obtenerPersona().edad < 18 && autorizacionFile && autorizacionFile.size === 0)
      throw new DomainException("El archivo de autorización es requerido para personas menores", 400);

    const gestor: GestorInscripcion = new GestorInscripcion();
    await gestor.Inscripcion(Number(idEvento), autorizacionFile);

    return NextResponse.json({ message: "Inscripción realizada" }, { status: 201 });
  } catch (err) {
    const error = err as DomainException;
    return NextResponse.json({ message: error?.message }, {
      status: error?.statusCode ?? 500,
    });
  }
}

export { POST };
