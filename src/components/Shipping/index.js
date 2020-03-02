import React, { useState } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Infos } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

function Shipping({ shipping, calcShippingRequest, calcShippingError }) {
  const schema = Yup.object().shape({
    zip: Yup.string()
      .length(8)
      .required(),
  });

  const [zip, setZip] = useState('');

  function handleZipChange(e) {
    setZip(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!(await schema.isValid({ zip }))) {
      calcShippingError();
      return;
    }
    calcShippingRequest(zip);
  }

  if (shipping.error) {
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleZipChange}
            value={zip}
            placeholder="Digite seu CEP"
            maxLength="8"
          />
          <button type="submit">Calcular</button>
        </form>
        <h4>Não é possível entregar neste CEP</h4>
      </Container>
    );
  }

  if (shipping.zip) {
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleZipChange}
            value={zip}
            placeholder="Digite seu CEP"
            maxLength="8"
          />
          <button type="submit">Calcular</button>
        </form>
        {shipping.loading ? (
          <h2>Calculando...</h2>
        ) : (
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
        )}
      </Container>
    );
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleZipChange}
          value={zip}
          placeholder="Digite seu CEP"
          maxLength="8"
        />
        <button type="submit">Calcular</button>
      </form>
    </Container>
  );
}

const mapStateToProps = state => ({
  shipping: state.cart.shipping,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
