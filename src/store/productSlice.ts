import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
	products: Product[]
	offset: number
	loading: boolean
	pageNumber?: number
}

export interface Product {
	brand: null | string
	id: string
	price: number
	product: string
}

const initialState: ProductState = {
	products: [],
	offset: 0,
	loading: false,
	pageNumber: 1,
}

const productSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		fetchProductIds(state) {
			state.loading = true
		},
		fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
			state.loading = false
			state.products = action.payload
		},
		fetchProductsFailure(state) {
			state.loading = true
		},
		goToNextPage(state) {
			state.offset += 50
			state.pageNumber = (state.offset / 50) + 1
		},
		goToPrevPage(state) {
			state.offset -= 50
				state.pageNumber = (state.offset / 50) + 1
		}
	},
})

export const { fetchProductIds, fetchProductsSuccess, fetchProductsFailure, goToNextPage, goToPrevPage } =
	productSlice.actions

export default productSlice.reducer