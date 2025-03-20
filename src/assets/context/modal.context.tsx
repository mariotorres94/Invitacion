import { createContext, FC, ReactNode, useCallback, useMemo, useReducer } from "react";

export type ModalState = {
    modals: Record<string, boolean>;
    data: Record<string, unknown>;
    showModal: (modal: string, data?: unknown) => void;
    hideModal: (modal: string) => void;
}

const initialState: ModalState = {
    modals: {},
    data: {},
    showModal: () => {},
    hideModal: () => {},
}

const ModalContext = createContext<ModalState>(initialState);

type Action =
    | { type: "SHOW_MODAL"; modal: string, data?: unknown }
    | { type: "HIDE_MODAL"; modal: string }

const modalReducer = (state: ModalState, action: Action): ModalState => {
    switch (action.type) {
        case "SHOW_MODAL":
            return {
                ...state,
                modals: { ...state.modals, [action.modal]: true},
                data: { ...state.data, [action.modal]: action.data }
            }
        case "HIDE_MODAL":
            delete state.modals[action.modal];
            return {
                ...state,
                modals: { ...state.modals, [action.modal]: false },
                data: { ...state.data }
            }
        default:
            return state;
    }
}

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const showModal = useCallback((modal: string, data?: unknown) => {
        dispatch({ type: "SHOW_MODAL", modal, data });
    }, []);

    const hideModal = useCallback((modal: string) => {
        dispatch({ type: "HIDE_MODAL", modal });
    }, []);

    const value = useMemo(
        () => ({ ...state, showModal, hideModal }),
        [state, showModal, hideModal]
    )

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;