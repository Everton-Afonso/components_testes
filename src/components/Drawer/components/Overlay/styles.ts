import styled from 'styled-components'

import { Props } from '../typings'

export const Overlay = styled.div<Props>`
  background-color: rgba(128, 128, 128, 0.3);
  position: fixed;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: ${({ open }) => (open ? 'block' : 'none')};
`
