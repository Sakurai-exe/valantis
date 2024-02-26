import styled from 'styled-components'
import { FlexBoxProps } from './FlexBox'

export const StyledFlexBox = styled.div<FlexBoxProps>`
	display: flex;
	flex-direction: ${(props) => props.flexdirection || 'row'};
	justify-content: ${(props) => props.justifycontent || 'flex-start'};
	align-items: ${(props) => props.alignitems || 'stretch'};
	align-self: ${(props) => props.alignSelf || 'auto'};
	flex-grow: ${(props) => props.flexGrow || 0};
	flex-wrap: ${(props) => props.flexwrap || 'nowrap'};
	gap: ${(props) => props.gap || '0'};
`
