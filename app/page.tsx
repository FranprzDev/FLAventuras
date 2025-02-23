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
import { events } from "@/lib/constants"
import Link from "next/link"

export default function EventsPage() {

  return (
    <>
    
    <div className="container mx-auto mt-[80px]"></div>
    <div className="container mx-auto py-8 ">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-[#FF6B6B]">EVENTOS DISPONIBLES</h1>
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
                <h3 className="font-bold mb-2 text-[#FF6B6B]">{event.name}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>{event.location}</p>
                  <p>Fecha: {event.date}</p>
                    <p className={event.status === "Cerrado" ? "text-red-600" : "text-green-600"}>{event.status}</p>
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
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
    </>
  )
}

