export interface Invitado {
    ID: number;
    Familia: string;
    Pases: number;
    Tipo: string;
    Nombre: string;
    Confirmacion: string;
    Registrante: string;
    Acompañantes: string[];
    Telefono: string;
}

export interface ApiResponse {
    data: Invitado[];
    status: string;
}

export interface DataInvitado {
    ID: number;
    Familia: string;
    Pases: number;
    Confirmacion: string;
}