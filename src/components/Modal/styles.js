import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ProductModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  border-radius: 4px;
  padding: 50px;
  h1 {
    font-size: 18px;
  }

  img {
    margin-top: 15px;
    height: 260px;
    width: 260px;
  }

  strong {
    width: 200px;
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
  }
  span {
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
    color: #5e5e5e;
  }

  a {
    margin-top: 10px;
    text-decoration: none;
  }

  button {
    margin-top: 10px;
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color: #fff;
    height: 30px;
    width: 200px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
