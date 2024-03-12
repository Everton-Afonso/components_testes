import Card from './Card'
import Items from './mock'

import * as S from './styles'

const CardProduct = () => {
  return (
    <S.ProductCardContainer>
      {Items.map((item) => {
        return <Card key={item.id} item={item} />
      })}
    </S.ProductCardContainer>
  )
}

export default CardProduct
