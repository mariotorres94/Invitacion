import { ConfirmacionData, UpdateData } from '../interface/form.interface';
import { ApiResponse, Invitado } from '../models/invitado.model';

export const API_URL = 'https://script.google.com/macros/s/AKfycbyNC89gfWS_RpneIvAT-vIqfEeyDsMsqGRFYSFanRgOeXIQO5mLdXkUm-VZNob2e20/exec';

export const DataService = {
    async getInvitados(): Promise<Invitado[]> {
        try {
            const url = `${API_URL}?t=${new Date().getTime()}`;
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            });

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

    async sendConfirmaciones(submissionData: ConfirmacionData): Promise<{ success: boolean; message?: string; updateData: UpdateData }> {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
                redirect: "follow",
                body: JSON.stringify(submissionData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP ${response.status}`);
            }

            const data = await response.json();
            return {
                success: true,
                updateData: {
                    confirmacion: data.updatedData.confirmacion || "",
                }
            };
        } catch (error) {
            console.error('Error sending confirmaciones:', error);
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                updateData: {
                    confirmacion: "",
                },
            };
        }
    }
};