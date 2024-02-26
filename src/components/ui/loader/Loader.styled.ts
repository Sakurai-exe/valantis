import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledLoaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

export const StyledLoaderImage = styled.img`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 50px;
	height: 50px;
	animation: ${rotateAnimation} 1s linear infinite;
`
