import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ModalActions from '../../store/modules/modal/actions';
import { Container, ProductModal } from './styles';

function Modal({ product, closeModal }) {
  console.tron.log(product);
  return (
    <Container>
      <ProductModal open>
        <h1>Item adicionado ao carrinho</h1>
        <img src={product.image} alt="Tenis" />
        <strong>{product.title}</strong>
        <span>{product.priceFormatted}</span>
        <Link onClick={closeModal} to="/cart">
          Finalizar Pedido
        </Link>
        <button onClick={closeModal} type="button">
          Continuar comprando
        </button>
      </ProductModal>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(null, mapDispatchToProps)(Modal);
