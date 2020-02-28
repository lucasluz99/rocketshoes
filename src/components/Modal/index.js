import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ProductModal } from './styles';

export default function Modal({ product, closeModal }) {
  return (
    <Container>
      <ProductModal open>
        <h1>Item adicionado ao carrinho</h1>
        <img src={product.image} alt="Tenis" />
        <strong>{product.title}</strong>
        <span>{product.priceFormatted}</span>
        <Link to="/cart">Finalizar Pedido</Link>
        <button onClick={closeModal} type="button">
          Continuar comprando
        </button>
      </ProductModal>
    </Container>
  );
}
