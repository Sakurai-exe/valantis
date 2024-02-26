import { Product } from 'store/productSlice'

export enum ProductActionTypes {
	FETCH_PRODUCT_IDS = 'FETCH_PRODUCT_IDS',
	FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
	FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}

interface FetchProductIdsAction {
	type: ProductActionTypes.FETCH_PRODUCT_IDS
}

interface FetchProductsSuccessAction {
	type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS
	payload: Product[]
}

interface FetchProductsFailureAction {
	type: ProductActionTypes.FETCH_PRODUCTS_FAILURE
	error: Error
}

export type ProductAction =
	| FetchProductIdsAction
	| FetchProductsSuccessAction
	| FetchProductsFailureAction

export const fetchProductIdsAction = () => {
	return { type: 'FETCH_DATA' }
}
