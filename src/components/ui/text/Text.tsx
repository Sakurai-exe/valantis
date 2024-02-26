import React from 'react'
import { StyledText } from './Text.styled'
import { ReactComponentChildren } from '../../../types'

export interface TextProps extends ReactComponentChildren {
    fontFamily?: string
    color?: string
    fontWeight?: string
    display?: string
}

export const Text: React.FC<TextProps> = ({ children, ...rest }) => {
    return <StyledText {...rest}>{children}</StyledText>
}
