export interface EventoResponseAPI {
    id: number;
    nombre: string;
    descripcion: string;
    created_at: string;
    fecha: string;
    ubicacion: string;
    cupo: number;
    estado_inscripciones: 'ABIERTO' | 'CERRADO';
}

export interface AutorizacionResponseAPI {
    id: number,
    documento: string | null,
    created_at: Date,
}