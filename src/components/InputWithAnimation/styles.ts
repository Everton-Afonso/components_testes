import styled, { css } from 'styled-components'

export const InputWithAnimation = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    width: 100%;
    padding-top: 0.75rem;
    border-radius: 0.5rem;
    position: relative;
    padding: 1rem 0 0;

    input {
      width: 100%;
      font-size: 1rem;
      border-radius: 0.25rem;
      padding: 0.5rem;
      border: none;
      padding-right: 2rem;
      transition: all 0.2s;
      background-color: ${theme.colors.lightBg};
      outline: 1.5px solid ${theme.colors.black};

      &::placeholder {
        color: transparent;
      }

      &:placeholder-shown ~ label {
        font-size: 1rem;
        cursor: text;
        color: ${theme.colors.black};
        top: 1.5rem;
      }
    }

    input[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    label,
    input:focus ~ label {
      position: absolute;
      top: 0.375rem;
      padding: 0 0.25rem;
      display: block;
      font-size: 0.875rem;
      background-color: ${theme.colors.lightBg};
      left: 0.5rem;
      color: ${theme.colors.black};
      transition: 0.3s;
      pointer-events: none;
    }

    span {
      position: absolute;
      right: -0.625rem;
      bottom: -0.625rem;
      width: 1.75rem;
      height: 1.75rem;
      transform: translate(-50%, -50%);
      transform-origin: center;
      cursor: pointer;
    }
  `}
`
