import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import EmptyCart from '../../components/EmptyCart';
import Shipping from '../../components/Shipping';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  return (
    <Container>
      {cart.length !== 0 ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button onClick={() => decrement(product)} type="button">
                        <MdRemoveCircleOutline color="#7159c1" size={20} />
                      </button>
                      <input readOnly type="number" value={product.amount} />
                      <button onClick={() => increment(product)} type="button">
                        <MdAddCircleOutline color="#7159c1" size={20} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <MdDelete color="#7159c1" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <Shipping />
            <Total>
              <div>
                <span>Total:</span>
                <strong>{total}</strong>
              </div>
              <button type="button">Finalizar pedido</button>
            </Total>
          </footer>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.products.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.shipping.price +
      state.cart.products.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
