import styled from 'styled-components'

export const StyledButtonWithIcon = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
	background-color: transparent;
	color: #007bff;
	font-size: 16px;
	cursor: pointer;
	transition: box-shadow 0.3s ease;
    text-transform: uppercase;
    
	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
`
