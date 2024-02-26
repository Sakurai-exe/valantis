import React from 'react'
import { StyledHeader } from './Header.styled'
import { IconComponent } from '../ui/IconWrapper/IconComponent'
import icon from '../../assets/icons/logo.png'
import { Layout } from '../Layout/Layout'
import { FlexBox } from '../ui/flexBox/FlexBox'
import { Text } from '../ui/text/Text'

export const Header = () => {
    return (
        <StyledHeader>
            <Layout>
                <FlexBox alignitems='center' gap='20px'>
                    <IconComponent iconSrc={icon} />
                    <Text fontWeight='bold'>Саша, ты ювелир!</Text>
                </FlexBox>
            </Layout>
        </StyledHeader>
    )
}
