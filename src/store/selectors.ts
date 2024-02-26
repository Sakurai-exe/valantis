import { RootState } from "./index";

export const selectProducts = (state: RootState) => state.items.products;
export const selectOffset = (state: RootState) => state.items.offset;
export const selectLoading = (state: RootState) => state.items.loading;
export const selectError = (state: RootState) => state.items.error;