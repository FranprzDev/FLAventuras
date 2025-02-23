import ControladorInscripcionAEvento from "@/lib/application/Controladores/ControladorInscripcionAEvento";
import { DomainException } from "@/types/DomainException";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
  const formData = await req.formData();
  const documento = formData.get("documento") as File | null;
  
  try {
    if (!documento)
      throw new DomainException("Falta el documento para subir", 404);

    const controlador : ControladorInscripcionAEvento = new ControladorInscripcionAEvento();
    const urlDocumento = await controlador.SubirDocumento(documento);

    return NextResponse.json(
      {
        url: urlDocumento,
        message: "Se subió correctamente el documento",
      },
      { status: 201 }
    );
  } catch (err) {
    const error = err as DomainException;
    return new NextResponse(error?.message, {
      status: error?.statusCode ?? 500,
    });
  }
}

export { POST };
