import React from 'react'
import { connect } from 'react-redux'
import { StyledGoods } from './Goods.styled'
import { Product } from '../store/productSlice'
import { selectError, selectLoading, selectProducts } from '../store/selectors'
import { RootState } from '../store/index'

interface GoodsProps {
    products: Product[]
    loading: boolean
    error: string | null
}

const Goods: React.FC<GoodsProps> = ({ products, loading, error }) => {
    return (
        <StyledGoods>
            {loading && <div>Загружаю список товаров...</div>}
            {error && <div>Ошибка во время загрузки товаров!</div>}
            <div>
                {products.map((product) => (
                    <div key={product.id}>{product.price}</div>
                ))}
            </div>
        </StyledGoods>
    )
}

const mapStateToProps = (state: RootState) => ({
    products: selectProducts(state),
    loading: selectLoading(state),
    error: selectError(state),
})

export default connect(mapStateToProps)(Goods)