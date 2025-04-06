export interface GuestForm {
    name: string;
}

export interface ConfirmacionData {
    attendance: string;
    fullName: string;
    phoneNumber: string;
    guest: GuestForm[] | null;
    familyCode: number | undefined;
}

export interface UpdateData {
    confirmacion: string;
}