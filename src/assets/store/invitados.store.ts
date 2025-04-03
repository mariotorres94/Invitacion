import { create } from "zustand";
import { DataService } from "../service/data.service";
import { Invitado } from "../models/invitado.model";

interface InvitadosState {
    invitados: Invitado[];
    invitadoEncontrado: Invitado | null;
    fetchInvitados: () => Promise<void>;
    setInvitadoEncontrado: (invitado: Invitado | null) => void;
    loadFromStorage: () => void;
}

export const useInvitadosStore = create<InvitadosState>((set) => ({
    invitados: [],
    invitadoEncontrado: null,

    fetchInvitados: async () => {
        try {
            const data = await DataService.getInvitados();
            set({ invitados: data });
        } catch (error) {
            console.error('Error al cargar invitados:', error);
        }
    },

    setInvitadoEncontrado: (invitado) => {
        if (invitado) {
            localStorage.setItem('invitadoEncontrado', JSON.stringify(invitado));
        } else {
            localStorage.removeItem('invitadoEncontrado');
        }
        set({ invitadoEncontrado: invitado });
    },

    loadFromStorage: () => {
        const saved = localStorage.getItem('invitadoEncontrado');
        if (saved) {
            try {
                set({ invitadoEncontrado: JSON.parse(saved) });
            } catch {
                localStorage.removeItem('invitadoEncontrado');
            }
        }
    }
}));