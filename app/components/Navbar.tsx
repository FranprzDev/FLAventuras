import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import SingletonSesion from "@/lib/transversal/Auth/Sesion";
import Persona from "@/lib/domain/Persona/Persona";

export function Navbar() {
  const [persona, setPersona] = useState<Persona | null>(null);
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    // Initialize user from session on component mount
    const sesion = SingletonSesion.getInstance(null);
    setPersona(sesion.obtenerPersona());
    setAge(sesion.obtenerPersona()?.edad || null);
  }, []);

  const toggleUserType = () => {
    if (persona) {
      const newAge = age === 18 ? 17 : 18;
      const newPersona: Persona = {
        ...persona,
        edad: newAge,
      };
      const sesion = SingletonSesion.getInstance(newPersona);
      sesion.setPersona(newPersona);
      setPersona(newPersona);
      setAge(newAge);
    } else {
      const newPersona: Persona = {
        Nombre: "Usuario",
        Apellido: "Apellido",
        dni: 12345678,
        fechaNacimiento: new Date(),
        localidad: "Localidad",
        codigoPostal: "1234",
        Mail: "usuario@example.com",
        edad: 18,
        getNombre: () => "Usuario",
        setNombre: (nombre: string) => {},
        getApellido: () => "Apellido",
        setApellido: (apellido: string) => {},
        getDni: () => 12345678,
        setDni: (dni: number) => {},
        getFechaNacimiento: () => new Date(),
        setFechaNacimiento: (fechaNacimiento: Date) => {},
        getLocalidad: () => "Localidad",
        setLocalidad: (localidad: string) => {},
        getCodigoPostal: () => "1234",
        setCodigoPostal: (codigoPostal: string) => {},
        getMail: () => "usuario@example.com",
        setMail: (mail: string) => {},
        getEdad: () => 18,
        setEdad: (edad: number) => {},
      };
      const sesion = SingletonSesion.getInstance(newPersona);
      sesion.setPersona(newPersona);
      setPersona(newPersona);
      setAge(18);
    }
  };

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
            <span className="text-b text-xl font-bold">{age && age >= 18 ? 'Mayor de Edad' : age && age < 18 ? 'Menor de Edad' : 'Select Age'}</span>
            <button onClick={toggleUserType}>
              <Avatar className="h-12 w-12">
                <AvatarImage src="/yooo.jpg" alt="User" />
                <AvatarFallback>{age && age >= 18 ? 'A' : age && age < 18 ? 'M' : 'U'}</AvatarFallback>
              </Avatar>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
