import { useState } from 'react'

import { DrawerProps } from './components/typings'
import { Wrapper } from './components/Wrapper'
import { OverlayDrawer } from './components/Overlay'
import IconDrawerDefaulte from './components/IconDrawerDefaulte'

import * as S from './styles'

const Drawer = ({
  children,
  openingPosition,
  iconDrawer,
  titleWrapper
}: DrawerProps) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)

  const handlerCloseDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer)
  }

  return (
    <>
      <S.BtnIcon onClick={handlerCloseDrawer}>
        {iconDrawer ? iconDrawer : <IconDrawerDefaulte fill="#000" />}
      </S.BtnIcon>

      <OverlayDrawer open={isOpenDrawer} close={handlerCloseDrawer} />

      <Wrapper
        open={isOpenDrawer}
        close={handlerCloseDrawer}
        openingPosition={openingPosition}
        titleWrapper={titleWrapper}
      >
        {children}
      </Wrapper>
    </>
  )
}

export default Drawer
