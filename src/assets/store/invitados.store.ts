import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'; // Esto viene con zustand
import { Invitado } from '../models/invitado.model';

interface InvitadosStore {
    invitados: Invitado[];
    invitadoActual: Invitado | null;
    setInvitados: (invitados: Invitado[]) => void;
    setInvitadoActual: (invitado: Invitado | null) => void;
    getInvitadoById: (id: number) => Invitado | undefined;
    clearInvitadoActual: () => void;
}

export const useInvitadosStore = create<InvitadosStore>()(
    persist(
        (set, get) => ({
            invitados: [],
            invitadoActual: null,
            setInvitados: (invitados) => set({ invitados }),
            setInvitadoActual: (invitado) => set({ invitadoActual: invitado }),
            getInvitadoById: (id) => {
                return get().invitados.find(invitado => invitado.ID === id);
            },
            clearInvitadoActual: () => set({ invitadoActual: null })
        }),
        {
            name: 'invitados-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);