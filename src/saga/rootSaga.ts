import { all } from 'redux-saga/effects'
import { watchFetchProduct } from './saga'

export default function* rootSaga() {
	yield all([watchFetchProduct()])
}
