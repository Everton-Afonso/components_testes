import { Props } from '../typings'
import IconClose from './IconClose'

import * as S from './styles'

export const Wrapper = ({
  open,
  close,
  openingPosition,
  children,
  titleWrapper
}: Props) => {
  return (
    <S.OpenWrapper open={open} openingPosition={openingPosition}>
      <S.TopWrapper openingPosition={openingPosition}>
        <button onClick={close}>
          <IconClose />
        </button>

        {titleWrapper && <p>{titleWrapper}</p>}
      </S.TopWrapper>

      {children}
    </S.OpenWrapper>
  )
}
