import * as S from './styles'

type CardProps = {
  item: {
    id: number
    src: string
    title: string
    desc: string
    in_stock: string
    price: string
    price_old: string
    btn_text: string
  }
}

const Card = ({ item }: CardProps) => {
  const { src, title, desc, in_stock, price, price_old, btn_text } = item

  return (
    <S.ProductCard>
      <a href="/" target="_blank" rel="noreferrer">
        <img src={src} alt={title} />

        <S.ProductCardContent>
          <h2>{title}</h2>

          <p>{desc}</p>
          <strong>{in_stock}</strong>

          <S.ProductCardContentPrice>
            <span>{price}</span>
            <span>{price_old}</span>
          </S.ProductCardContentPrice>

          <S.ProductCardFlags>
            <span>30</span>
            <span>-25%</span>
          </S.ProductCardFlags>
        </S.ProductCardContent>

        <S.ProductCardBtn>
          <button type="button">{btn_text}</button>
        </S.ProductCardBtn>
      </a>
    </S.ProductCard>
  )
}

export default Card
