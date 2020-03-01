import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Infos } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

function Shipping({ shipping, calcShippingRequest }) {
  const [zip, setZip] = useState('');

  function handleZipChange(e) {
    setZip(e.target.value);
  }

  return (
    <Container>
      <div>
        <input
          onChange={handleZipChange}
          value={zip}
          placeholder="Digite seu CEP"
          maxLength="8"
        />
        <button type="submit" onClick={() => calcShippingRequest(zip)}>
          Calcular
        </button>
      </div>
      <Infos>
        <thead>
          <tr>
            <th>Método</th>
            <th>Prazo</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sedex</td>
            <td>{shipping.days} dias</td>
            <td>R$ {shipping.price}</td>
          </tr>
        </tbody>
      </Infos>
    </Container>
  );
}

const mapStateToProps = state => ({
  shipping: state.cart.shipping,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
