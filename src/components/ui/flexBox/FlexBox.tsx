import React from 'react'
import { StyledFlexBox } from './FlexBox.styled'
import { ReactComponentChildren } from '../../../types'

export interface FlexBoxProps extends ReactComponentChildren {
    flexdirection?: string
    justifycontent?: string
    alignitems?: string
    alignSelf?: string
    flexGrow?: number
    flexwrap?: string
    gap?: string
}

export const FlexBox: React.FC<FlexBoxProps> = ({ children, ...rest }) => {
    return <StyledFlexBox {...rest}>{children}</StyledFlexBox>
}
