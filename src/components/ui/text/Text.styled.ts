import styled from 'styled-components'
import { TextProps } from './Text'

export const StyledText = styled.span<TextProps>`
	display: ${(props) => props.display || 'block'};
	font-family: ${(props) => props.fontFamily || 'Arial, sans-serif'};
	color: ${(props) => props.color || 'black'};
	font-weight: ${(props) => props.fontWeight || 'normal'};
`
