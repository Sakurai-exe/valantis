// rootSaga.js
import { all } from 'redux-saga/effects'
import { watchFetchProductIds } from './saga'

export default function* rootSaga() {
	yield all([watchFetchProductIds()])
}
