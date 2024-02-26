import React from 'react'
import { connect } from 'react-redux'
import { StyledGoods, StyledNavigateButtonsWrapper } from './Goods.styled'
import { ProductState } from '../store/productSlice'
import { selectLoading, selectProducts, selectOffset, selectPageNumber, selectDefaultBrands } from '../store/selectors'
import { RootState } from '../store/index'
import { ProductCard } from '../components/productCard/ProductCard'
import { FlexBox } from '../components/ui/flexBox/FlexBox'
import { Loader } from '../components/ui/loader/Loader'
import { removeDuplicatesById } from '../utils'
import { ButtonWithIcon } from '../components/ui/buttonWithIcon/ButtonWithIcon'
import GoToLeft from '../assets/icons/goToLeft.svg'
import GoToRight from '../assets/icons/goToRight.svg'
import { goToNextPage, goToPrevPage } from '../store/productSlice'
import { useAppDispatch } from '../store/hooks'
import { Text } from '../components/ui/text/Text'
import { Filter } from './filter/Filter'

interface GoodsProps extends ProductState { }
enum ClickType {
    Prev = 'prev',
    Next = 'next'
}

const Goods: React.FC<GoodsProps> = ({ products, loading, offset, pageNumber, defaultBrands }) => {
    const dispatch = useAppDispatch()
    const nextPageHandleClick = (clickType: string) => {
        if (clickType === ClickType.Prev) {
            dispatch(goToPrevPage())
        } else {
            dispatch(goToNextPage())
        }

    }
    const dataWithoutDuplicates = removeDuplicatesById(products)

    return (
        <StyledGoods>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Filter defaultBrands={defaultBrands} />
                    <FlexBox justifycontent='flex-start' flexwrap='wrap' gap='25px'>
                        {dataWithoutDuplicates.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </FlexBox>
                    {!loading && (
                        <StyledNavigateButtonsWrapper>
                            <FlexBox justifycontent='space-between' alignitems='center'>
                                {offset === 0 ? (
                                    <div></div>
                                ) : (
                                    <ButtonWithIcon icon={GoToLeft} iconPosition='left' onClick={() => nextPageHandleClick(ClickType.Prev)}>
                                        Сюда
                                    </ButtonWithIcon>
                                )}
                                <Text fontWeight='bold'>{pageNumber}</Text>
                                <ButtonWithIcon icon={GoToRight} iconPosition='right' onClick={() => nextPageHandleClick(ClickType.Next)}>
                                    Туда
                                </ButtonWithIcon>
                            </FlexBox>
                        </StyledNavigateButtonsWrapper>
                    )}
                </div>
            )}
        </StyledGoods>
    )
}

const mapStateToProps = (state: RootState) => ({
    products: selectProducts(state),
    loading: selectLoading(state),
    offset: selectOffset(state),
    pageNumber: selectPageNumber(state),
    defaultBrands: selectDefaultBrands(state),
})

export default connect(mapStateToProps)(Goods)
