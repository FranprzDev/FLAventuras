import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Link from "next/link"

export default function EventsPage() {
  const events = Array(12).fill({
    name: "Nombre del Evento",
    location: "Ansenuza, Cordoba",
    date: "03/03/2025",
    status: "Abierto a Inscripciones",
    image: "/placeholder.svg?height=200&width=300",
  })

  return (
    <>
    
    <div className="container mx-auto mt-[80px]"></div>
    <div className="container mx-auto py-8 ">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900">EVENTOS DISPONIBLES</h1>
        <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF5252]">
          CREAR EVENTO
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, i) => (
          <Link href={`/events/${i}`} key={i}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">{event.name}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>{event.location}</p>
                  <p>Fecha: {event.date}</p>
                  <p className="text-green-600">{event.status}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
    </>
  )
}

