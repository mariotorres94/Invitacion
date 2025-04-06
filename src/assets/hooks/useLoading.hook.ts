import { useLoadingStore } from "../store/loading.store";

export const useLoading = () => {
    return useLoadingStore();
};