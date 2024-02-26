import { useDispatch } from 'react-redux'
import type { AppDispatch } from './index'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
