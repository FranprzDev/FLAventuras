'use client'
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SingletonSesion from "@/lib/transversal/Auth/Sesion"
import { personaParaTestear } from "@/lib/constants"
import { useEffect, Suspense } from "react"

function NavbarContent() {

  return (
    <header className="fixed top-0 w-full flex justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <div className="container max-w-6xl flex h-20 items-center justify-around">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/FLA.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </Link>
          <div className="flex justify-center items-center gap-2">
            <span className="text-b text-xl font-bold">Mayor de Edad</span>
            <Avatar className="h-12 w-12">
              <AvatarImage src="/yooo.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}

export function Navbar() {
  return (
    <Suspense fallback={<p>Loading navbar...</p>}>
      <NavbarContent />
    </Suspense>
  )
}
