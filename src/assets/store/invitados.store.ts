import { create } from 'zustand';
import { Invitado } from '../models/invitado.model';
import { DataService } from '../service/data.service';
import { persist } from 'zustand/middleware';
interface InvitadosStore {
    invitados: Invitado[];
    invitadoActual: Invitado | null;
    loading: boolean;
    error: string | null;
    setInvitados: (invitados: Invitado[]) => void;
    setInvitadoActual: (invitado: Invitado | null) => void;
    getInvitadoById: (id: number) => Invitado | undefined;
    clearInvitadoActual: () => void;
    clearInvitados: () => void;
    fetchInvitados: () => Promise<void>;
}

export const useInvitadosStore = create<InvitadosStore>()(
    persist(
        (set, get) => ({
            invitados: [],
            loading: false,
            error: null,
            invitadoActual: null,
            fetchInvitados: async () => {
                try {
                    set({ loading: true, error: null });
                    const data = await DataService.getInvitados();
                    set({ invitados: data, loading: false });
                } catch (error) {
                    set({
                        error: error instanceof Error ? error.message : 'Error desconocido',
                        loading: false
                    });
                }
            },
            setInvitados: (invitados) => set({ invitados }),
            setInvitadoActual: (invitado) => set({ invitadoActual: invitado }),
            getInvitadoById: (id) => {
                return get().invitados.find(invitado => invitado.ID === id);
            },
            clearInvitadoActual: () => set({ invitadoActual: null }),
            clearInvitados: () => set({ invitados: [] }),
        }),
        {
            name: 'invitados-storage',
            partialize: (state) => ({
                invitadoActual: state.invitadoActual ? {
                    ID: state.invitadoActual.ID,
                    Familia: state.invitadoActual.Familia,
                    Pases: state.invitadoActual.Pases,
                    Confirmacion: state.invitadoActual.Confirmacion,
                } : null
            }),
        }
    )
);
export default useInvitadosStore;