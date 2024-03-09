import styled from 'styled-components'

import { Props, defaultProps } from '../typings'

export const OpenWrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  ${({ openingPosition }) =>
    openingPosition === 'left' ? 'left: 0;' : 'right: 0;'}
  z-index: 134;
  background-color: #fff;
  width: 320px;
  transform: translateX(
    ${({ open, openingPosition }) =>
      open ? '0' : openingPosition === 'left' ? '-320px' : '320px'}
  ); /* Alteração aqui */
  transition: transform 0.5s;
  max-height: 100%;
  min-height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
`

OpenWrapper.defaultProps = defaultProps

export const TopWrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    background: transparent;
    position: absolute;
    top: 50%;
    padding: 10px;
    cursor: pointer;
    transform: translateY(-50%);
    ${({ openingPosition }) =>
      openingPosition === 'left' ? 'right: 0;' : 'left: 0;'};
  }

  p {
    padding: 10px 0;
    font-size: 16px;
    margin: 0;
  }
`
