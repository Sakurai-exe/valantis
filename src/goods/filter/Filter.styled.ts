import styled from 'styled-components'

export const StyledFilter = styled.div``

export const StyledModalWrapper = styled.div<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: ${(props) => (props.isOpen ? '0' : '-400px')};
	width: 400px;
	height: 100%;
	background-color: #fff;
	box-shadow: ${(props) =>
		props.isOpen ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none'};
	transition: left 0.3s ease-in-out;
	z-index: 999;
	overflow-y: auto; /* Добавление вертикальной прокрутки */
`;
export const StyledOverlay = styled.div<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

export const StyledCloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 5px 10px;
	background-color: #ccc;
	border: none;
	cursor: pointer;
`

export const StyledModalContent = styled.div`
	padding: 20px;
`

export const StyledModalTitle = styled.div`
    padding-bottom: 50px;
`