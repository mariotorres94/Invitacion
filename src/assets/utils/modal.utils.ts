import { ConfirmacionData} from "../interface/form.interface";

export const contarInvitados = (invitado: ConfirmacionData): number => {
    let total = 1;

    if (Array.isArray(invitado.guest) && invitado.guest.length > 0) {
        total += invitado.guest.length;
    }

    return total;
}