import React, { useEffect } from 'react'
import { Layout } from './components/Layout/Layout'
import { Header } from './components/header/Header'
import { fetchProductIds } from './saga/actions'
import { connect } from 'react-redux'
import { RootState } from './store/index'
import { useAppDispatch } from './store/hooks'


export const App: React.FC = ({ products, loading, error }: any) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProductIds())
    }, [fetchProductIds])

    return (
        <div>
            <Header />
            <Layout>{products}</Layout>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error,
});

const mapDispatchToProps = {
    fetchProductIds,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);