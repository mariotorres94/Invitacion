import { create } from 'zustand';
import { Invitado } from '../models/invitado.model';
import { DataService } from '../service/data.service';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useEffect, useState } from 'react';

const isClient = () => typeof window !== 'undefined';

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
    _hasHydrated: boolean;
}

export const useInvitadosStore = create<InvitadosStore>()(
    persist(
        (set, get) => ({
            invitados: [],
            loading: false,
            error: null,
            invitadoActual: null,
            _hasHydrated: false,

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
            getInvitadoById: (id) => get().invitados.find(invitado => invitado.ID === id),
            clearInvitadoActual: () => set({ invitadoActual: null }),
            clearInvitados: () => set({ invitados: [] }),
        }),
        {
            name: 'invitados-storage',
            storage: createJSONStorage(() => {
                if (isClient()) return localStorage;
                return {
                    getItem: () => null,
                    setItem: () => { },
                    removeItem: () => { }
                };
            }),
            partialize: (state) => ({
                invitadoActual: state.invitadoActual
            }),
            onRehydrateStorage: () => (state) => {
                if (state) state._hasHydrated = true;
            }
        }
    )
);

export const useHydratedInvitadosStore = () => {
    const store = useInvitadosStore();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(store._hasHydrated);
    }, [store._hasHydrated]);

    return isHydrated ? store : {
        ...store,
        invitados: [],
        invitadoActual: null,
        loading: false,
        error: null
    };
};