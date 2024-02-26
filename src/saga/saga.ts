// sagas.js
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { Api, fetchData } from '../api/api'; // Замените на вашу функцию fetch
import { RootState } from 'store';
import { Product, fetchProductIds, fetchProductsFailure, fetchProductsSuccess } from '../store/productSlice';

type ProductId = number;

function* fetchProductSaga() {
    const state: RootState = yield select();
    const offset = state.items.offset;
    yield put(fetchProductIds())
  try {
    const productIds: ProductId[] = yield call(fetchData, Api.GetIds, {"offset": offset, "limit": 50})
    const products: Product[] = yield call(fetchData, Api.GetItems, {"ids": productIds});
    yield put(fetchProductsSuccess(products))
  } catch (error) {
    yield put(fetchProductsFailure(error as string))
  }
}

export function* watchFetchProduct() {
  yield takeEvery('FETCH_DATA', fetchProductSaga);
}
