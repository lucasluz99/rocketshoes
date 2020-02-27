import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 13px;
  transition: opacity 150ms;
  &:hover {
    opacity: 0.7;
  }
  div {
    margin-right: 10px;
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    span {
      color: #999;
    }
  }
`;
