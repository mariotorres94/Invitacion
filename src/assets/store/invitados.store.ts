import { create } from "zustand";
import { DataService } from "../service/data.service";
import { Invitado } from "../models/invitado.model";
import { ConfirmacionData } from "../interface/form.interface";

interface InvitadosState {
    invitados: Invitado[];
    invitadoEncontrado: Invitado | null;
    shouldPlayMusic: boolean;
    dataForm: ConfirmacionData | null;
    confirmado: string;
    fetchInvitados: () => Promise<void>;
    setInvitadoEncontrado: (invitado: Invitado | null) => void;
    setShouldPlayMusic: (play: boolean) => void;
    loadFromStorage: () => void;
    setDataForm: (formData: ConfirmacionData) => void;
    setConfirmado: (confirmado: string) => void;
}

export const useInvitadosStore = create<InvitadosState>((set) => ({
    invitados: [],
    invitadoEncontrado: null,
    shouldPlayMusic: false,
    dataForm: null,
    confirmado: '',

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

    setShouldPlayMusic: (play) => {
        set({ shouldPlayMusic: play });
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
    },

    setDataForm: (formData) => {
        set({ dataForm: formData });
    },

    setConfirmado: (confirmado) => {
        set({ confirmado });
    },
}));