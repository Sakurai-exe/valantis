import React from 'react'
import { StyledProductCard, StyledProductImage } from './ProductCard.styled'
import { FlexBox } from '../ui/flexBox/FlexBox'
import { Product } from '../../store/productSlice'
import TemporaryPlug from '../../assets/images/temporary_plug.png'
import { Text } from '../ui/text/Text'

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product
}) => {
    return (
        <StyledProductCard>
            <FlexBox flexdirection="column" gap='10px'>
                <StyledProductImage src={TemporaryPlug} />
                <div key={product.id}>
                    <Text>{product.id}</Text>
                    <Text>{product.id}</Text>
                    <Text>{product.product}</Text>
                    <Text>{product.brand}</Text>
                    <Text color='#A52838' fontWeight='bold'>{product.price} ₽</Text>
                </div>
            </FlexBox>
        </StyledProductCard>
    )
}
