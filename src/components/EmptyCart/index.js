import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Container } from './styles';

export default function EmptyCart() {
  return (
    <Container>
      <MdShoppingCart color="#7159c1" size={50} />
      <span>Seu carrinho está vazio</span>
    </Container>
  );
}
