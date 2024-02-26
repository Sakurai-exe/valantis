import React from 'react'
import { StyledLoaderImage, StyledLoaderWrapper } from './Loader.styled'
import Ring from '../../../assets/icons/ring.svg'

export const Loader: React.FC = () => {
    return (
        <StyledLoaderWrapper>
            <StyledLoaderImage src={Ring} />
        </StyledLoaderWrapper>
    )
}
