import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  footer {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    text-align: right;

    button {
      background: #7159c1;
      border: 0;
      color: #fff;
      text-transform: uppercase;
      padding: 10px;
      border-radius: 4px;
      font-weight: bold;
      transition: background 200ms;
      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }
    }

    div {
      span {
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
        margin-right: 10px;
        color: #999;
      }

      strong {
        font-weight: bold;
        font-size: 27px;
      }
      margin-bottom: 10px;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
    text-transform: uppercase;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }

  img {
    max-width: 200px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: inline-block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 6px;
      width: 50px;
      margin: 0 10px;
    }
  }
`;

export const Total = styled.div``;
