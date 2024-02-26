import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
	products: Product[]
	offset: number
	loading: boolean
	pageNumber: number
	filter: Filter
	defaultBrands: string[]
}

export interface Product {
	brand: null | string
	id: string
	price: number
	product: string
}

export interface Filter {
	price?: number
	productName?: string
	brand?: string
}

const initialState: ProductState = {
	products: [],
	offset: 0,
	loading: false,
	pageNumber: 1,
	filter: {},
	defaultBrands: [],
}

const productSlice = createSlice({
	name: 'product',
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
			state.pageNumber = state.offset / 50 + 1
		},
		goToPrevPage(state) {
			state.offset -= 50
			state.pageNumber = state.offset / 50 + 1
		},
		setDefaultBrands(state, action: PayloadAction<string[]>) {
			state.defaultBrands = action.payload
		},
	},
})

export const {
	fetchProductIds,
	fetchProductsSuccess,
	fetchProductsFailure,
	goToNextPage,
	goToPrevPage,
	setDefaultBrands,
} = productSlice.actions

export default productSlice.reducer
