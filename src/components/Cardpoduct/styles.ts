import styled, { css } from 'styled-components'

export const ProductCardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-auto-rows: auto;
  gap: 30px;
  padding: 30px;
`

export const ProductCard = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.darkVariant};
    border-radius: 12px;

    &:hover {
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    }

    a {
      text-decoration: none;

      img {
        display: block;
        width: 100%;
        object-fit: cover;
        max-width: 100%;
      }
    }
  `}
`

export const ProductCardContent = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 25px 0 25px;
    flex-grow: 1;

    h2 {
      margin-bottom: 11px;
      color: ${theme.colors.black};
      font-size: 16px;
      font-weight: 600;
      line-height: 125%;
    }

    p {
      margin-bottom: 11px;
      color: #6d6d6d;
      font-size: 12px;
      font-weight: 400;
      line-height: 120%;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      height: calc(12px * 1.2 * 5);
    }

    strong {
      display: flex;
      align-items: center;
      color: ${theme.colors.green};
      font-size: 14px;
      font-weight: 500;
      line-height: 125%;
      margin-top: auto;
      margin-bottom: 10px;

      &::before {
        content: '';
        flex: 0 0 6px;
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background: ${theme.colors.green};
        margin-right: 8px;
      }
    }
  `}
`

export const ProductCardContentPrice = styled.div`
  ${({ theme }) => css`
    margin-bottom: 12px;
    display: flex;
    align-items: flex-end;

    span {
      line-height: 125%;

      &:first-child {
        color: ${theme.colors.black};
        font-size: 18px;
        font-weight: 700;
      }

      &:last-child {
        margin-left: 7px;
        color: ${theme.colors.gray};
        font-size: 14px;
        font-weight: 500;
        text-decoration-line: line-through;
      }
    }
  `}
`

export const ProductCardFlags = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    transform: translate(0, -10px);
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 0 25px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.darkVariant};
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      border-radius: 10px;
      padding: 0 12px;
      height: 2em;

      &:first-child {
        background: ${theme.colors.green};
        text-transform: uppercase;
      }

      &:last-child {
        background: ${theme.colors.red};
      }
    }
  `}
`

export const ProductCardBtn = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: 25px;

    button {
      position: relative;
      height: 48px;
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      box-shadow: none;
      border: none;
      outline: none;
      cursor: pointer;
      text-transform: none;
      text-shadow: none;
      text-decoration: none;
      white-space: nowrap;
      user-select: none;
      color: #b7b7b7;
      background: transparent;
      border: 1px solid #b7b7b7;
      padding: 0 24px;
      border-radius: 9999px;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      transition-property: color, background-color, border-color, opacity,
        box-shadow;
      transition-timing-function: ease-in-out;
      transition: all 0.2s ease;

      &:hover {
        color: ${theme.colors.green};
        border: 1px solid ${theme.colors.green};
        background: #ffffff;
      }
    }
  `}
`
