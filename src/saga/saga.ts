// sagas.js
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { Api, fetchData } from '../api/api'; // Замените на вашу функцию fetch
import { Product, RootState } from 'store';

// Определяем типы для данных
type ProductId = number;

function* fetchProductIdsSaga() {
    const state: RootState = yield select();
    const offset = state.products.offset;
  try {
    const productIds: ProductId[] = yield call(fetchData, Api.GetIds, {"offset": offset, "limit": 50});
    const products: Product[] = yield call(fetchData, Api.GetItems, {"ids": productIds});
    yield put({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });
  } catch (error) {
    yield put({ type: 'FETCH_PRODUCTS_FAILURE', error });
  }
}

export function* watchFetchProductIds() {
  yield takeEvery('FETCH_PRODUCT_IDS', fetchProductIdsSaga);
}
