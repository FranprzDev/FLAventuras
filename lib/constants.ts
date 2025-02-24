import Persona from "./domain/Persona/Persona";

export const events = [
  {
    name: "Pintemos otro Mural!",
    location: "Miramar de Ansenuza, Cordoba",
    date: "07/03/2025",
    status: "Abierto a Inscripciones",
    image: "/mural.png",
  },
  {
    name: "Limpieza de Costas",
    location: "Marull, Cordoba",
    date: "15/07/2024",
    status: "Cerrado",
    image: "/limpcostas.png",
  },
  {
    name: "Día de los Humedales",
    location: "La Para, Cordoba",
    date: "02/02/2025",
    status: "Cerrado",
    image: "/humedales.png",
  },
  {
    name: "Salida de Campo",
    location: "Brinkmann, Cordoba",
    date: "20/03/2024",
    status: "Cerrado",
    image: "/salidadecampo.png",
  },
  {
    name: "Visita a Tucumán",
    location: "San Miguel de Tucumán, Capital",
    date: "10/11/2024",
    status: "Cerrado",
    image: "/feriadeproyectos.png",
  },
  {
    name: "Día del Ambiente",
    location: "Balnearia, Cordoba",
    date: "05/06/2024",
    status: "Cerrado",
    image: "/ambiente.png",
  },
];

export const personaMayor = new Persona(
  "Francisco Miguel",
  "Perez",
  44190234,
  new Date("2003-09-06"),
  21,
  "Delfín Gallo",
  "4117",
  "franciscoperezdeveloper@gmail.com"
);
export const personaMenor = new Persona(
  "Juan Palindromo",
  "Perez",
  47333222,
  new Date("2009-09-06"),
  16,
  "Miramar de Ansenuza",
  "X3563",
  "juanpalindromo@gmail.com"
);
export const luisRocha = new Persona(
  "Luis Rocha",
  "Parejon",
  4500000,
  new Date("2000-02-12"),
  25,
  "La Paquita",
  "3223",
  "rochaparejon@gmail.com"
);

export const personaParaTestear = personaMenor