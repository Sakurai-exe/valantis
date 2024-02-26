import { all } from 'redux-saga/effects'
import { watchFetchProduct, watchOffsetChange } from './saga'

export default function* rootSaga() {
	yield all([watchFetchProduct(), watchOffsetChange()])
}
