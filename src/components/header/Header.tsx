import React from 'react'
import { StyledHeader } from './Header.styled'
import { IconComponent } from '../ui/IconWrapper/IconComponent'
import icon from '../../assets/icons/logo.png'
import { Layout } from '../Layout/Layout'
import { FlexBox } from '../ui/flexBox/FlexBox'

export const Header = () => {
    return (
        <StyledHeader>
            <Layout>
                <FlexBox>
                    <IconComponent iconSrc={icon} />
                    <div>Тут типо шапка</div>
                </FlexBox>
            </Layout>
        </StyledHeader>
    )
}
