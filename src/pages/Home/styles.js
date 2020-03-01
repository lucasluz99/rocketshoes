import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      max-width: 300px;
      max-height: 300px;
      align-self: center;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 10px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 200ms;
      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.2);

        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        font-size: 13px;
      }
    }
  }
`;

export const Pagination = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  span {
    color: #fff;
    margin: 0 20px;
    font-size: 16px;
  }

  button {
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    padding: 5px;
    color: #fff;
    font-weight: bold;
  }
`;
