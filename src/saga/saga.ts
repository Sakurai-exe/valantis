import { put, call, takeEvery, select, delay, take } from 'redux-saga/effects';
import { Api, fetchData } from '../api/api';
import { RootState } from 'store';
import { Product, fetchProductIds, fetchProductsFailure, fetchProductsSuccess } from '../store/productSlice';

export type ProductId = number;

function* fetchProductSaga() {
  const state: RootState = yield select();
  const offset = state.items.offset;
  yield put(fetchProductIds())
  while (true) {
    try {
      const productIds: ProductId[] = yield call(fetchData, Api.GetIds, {"offset": offset, "limit": 50});
      const products: Product[] = yield call(fetchData, Api.GetItems, {"ids": productIds});
      yield put(fetchProductsSuccess(products));
      break;
    } catch (error) {
      const errorId = (error as any)?.id;
      yield put(fetchProductsFailure())
      if (errorId) {
        console.error(`Ошибка API: ${errorId}`);
      }
      yield delay(1000);
    }
  }
}

export function* watchFetchProduct() {
  yield takeEvery(['FETCH_DATA'], fetchProductSaga);
}

export function* watchOffsetChange() {
  while (true) {
    yield take(['items/goToNextPage', 'items/goToPrevPage']); // Замените 'OFFSET_CHANGE_ACTION_TYPE' на ваше действие, которое изменяет offset
    yield call(fetchProductSaga);
  }
}