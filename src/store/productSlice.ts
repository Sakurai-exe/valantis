import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Product, RootState } from './index'

interface ProductState {
  products: Product[];
  offset: number;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  offset: 0,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductIds(state) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductIds, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;
export const selectCount = (state: RootState) => state.products