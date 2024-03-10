import styled from 'styled-components'

export const SocialIcons = styled.section`
  height: 50px;

  ul {
    li {
      list-style-type: none;
      position: relative;
      border-radius: 6px;
      padding: 15px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: red;
      transition: all 0.2s ease;

      span {
        position: absolute;
        top: -30px;
        color: #fff;
        padding: 5px 8px;
        opacity: 0;
        border-radius: 8px;
        background: rebeccapurple;
        pointer-events: none;
        transition: all 0.3s ease;

        &::before {
          position: absolute;
          content: '';
          height: 8px;
          width: 8px;
          background: rebeccapurple;
          bottom: -3px;
          left: 50%;
          transform: translate(-50%) rotate(45deg);
          transition: all 0.3s ease;
        }
      }

      &:hover {
        span {
          top: -40px;
          opacity: 1;
          visibility: visible;
          pointer-events: all;
        }
      }
    }
  }
`
