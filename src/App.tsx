import React, { useEffect } from 'react'
import { Header } from './components/header/Header'
import { useAppDispatch } from './store/hooks'
import { fetchProductIdsAction } from './saga/actions'
import Goods from './goods/Goods'

export const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProductIdsAction())
    }, [])

    return (
        <div>
            <Header />
            <Goods />
        </div>
    )
}
