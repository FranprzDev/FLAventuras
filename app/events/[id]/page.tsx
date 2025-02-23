import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar } from "lucide-react"
import { RegistrationDialog } from "@/app/components/registration-dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function EventPage() {
  return (
    <div className="min-h-[calc(100vh-128px)]">
      <div className="w-full">
        <Carousel className="w-full">
          <Image src="/mural.png" alt="Pintemos otro Mural!" width={1920} height={1080} />
        </Carousel>
        <nav className="flex items-center gap-2 mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <span className="text-gray-400">&gt;</span>
          <Link href="/events" className="text-gray-600 hover:text-gray-900">
            Lista de Eventos
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-900">Salida de Avistaje de Aves</span>
        </nav>

        <h1 className="text-4xl font-bold text-center text-[#FF6B6B] mb-8">Salida de Avistaje de Aves</h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can
            procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical
            exercise, except to obtain some advantage from it? But who has any right to find fault with a man who
            chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-6 h-6 text-[#FF6B6B]" />
              <span>Ansenuza, Córdoba</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-6 h-6 text-[#FF6B6B]" />
              <span>03/04/2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-green-500 font-medium">INSCRIPCIONES ABIERTAS</span>
            </div>
          </div>

          <RegistrationDialog>
            <Button size="lg" className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white">
              Inscribirte
            </Button>
          </RegistrationDialog>
        </div>
      </div>
    </div>
  )
}

