import { put, call, takeEvery, select, delay, take } from 'redux-saga/effects'
import { Api, fetchData } from '../api/api'
import { RootState } from 'store'
import {
	Product,
	fetchProductIds,
	fetchProductsFailure,
	fetchProductsSuccess,
	setDefaultBrands,
} from '../store/productSlice'

export type ProductId = number

function* fetchProductSaga() {
	const state: RootState = yield select()
	const offset = state.items.offset
	yield put(fetchProductIds())
	while (true) {
		try {
			const productIds: ProductId[] = yield call(fetchData, Api.GetIds, {
				offset: offset,
				limit: 50,
			})
			const products: Product[] = yield call(fetchData, Api.GetItems, {
				ids: productIds,
			})
			const brands: string[] = yield call(fetchData, Api.GetFields, {
				field: 'brand',
			})
			const filteredArray = brands.filter((item) => item !== null)

			yield put(fetchProductsSuccess(products))
			yield put(setDefaultBrands(filteredArray))
			break
		} catch (error) {
			const errorId = (error as any)?.id
			yield put(fetchProductsFailure())
			if (errorId) {
				console.error(`Ошибка API: ${errorId}`)
			}
			yield delay(1000)
		}
	}
}

// function* fetchFilteredProducts() {
// 	const state: RootState = yield select()
// 	const filter = state.items.filter
// 	// Выводит айдишники по нужной цене. Выводит с ценой ниже чем указано. Можно попробовать делать два запроса чтобы отсеивать нижнюю границу цены
// 	const priceIds = yield call(fetchData, Api.Filter, { price: 17500.0 })

// 	// Выводит айдишники по названию товаров
// 	const productNameIds = yield call(fetchData, Api.Filter, {
// 		product: 'кольцо',
// 	})
// 	console.log(productNameIds)
// }

export function* watchFetchProduct() {
	yield takeEvery(['FETCH_DATA'], fetchProductSaga)
}

export function* watchOffsetChange() {
	while (true) {
		yield take(['product/goToNextPage', 'product/goToPrevPage'])
		yield call(fetchProductSaga)
	}
}
