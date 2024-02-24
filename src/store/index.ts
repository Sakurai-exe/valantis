import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import productSlice from './productSlice'
import rootSaga from '../saga/rootSaga'

export interface ProductState {
	products: Product[];
	loading: boolean;
	error: Error | null;
  }
  
  export interface Product {
	id: number;
	name: string;
  }

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
	reducer: {products: productSlice},
	middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch