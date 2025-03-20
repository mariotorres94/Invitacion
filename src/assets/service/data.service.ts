import { ApiResponse, Invitado } from '../models/invitado.model';

export interface ConfirmacionData {
    attendance: string;
    fullName: string;
    phoneNumber: string;
    guest?: {
        nombre: string;
    }[];
    familyCode: string | number;
}

// export const API_URL = 'https://script.google.com/macros/s/AKfycbyEjOAEitVrj91hv3wbvwRsZAch_57TSCsMCjX6zVXNtEBqyFXf2Ozg1Br_yaY_oLc/exec';
// export const API_URL = 'https://script.google.com/macros/s/AKfycbwPO20gtf6E9CNozkankXPfQp4pyADaFPbcLVYA0SVg-nx39AcVWxHFf5hCkzADrkc/exec';
export const API_URL = 'https://script.google.com/macros/s/AKfycbwi7Mnh8XGglHWtQ2hx_SbkZ3owyHwuuL0jgVCCWLP8-0KoufGOtUvvXB8Fc-4UKGU/exec';

export const DataService = {
    async getInvitados(): Promise<Invitado[]> {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(
                    errorData?.message ||
                    `Error ${response.status}: ${response.statusText}`
                );
            }

            const apiResponse: ApiResponse = await response.json();
            return apiResponse.data;
        } catch (error) {
            console.error('Error fetching invitados:', error);
            return [];
        }
    },

    async sendConfirmaciones(submissionData: ConfirmacionData): Promise<{ success: boolean; message?: string }> {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error sending confirmaciones:', error);
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
};