import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
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
          <td>
            <img
              src="https://static.netshoes.com.br/produtos/tenis-caminhada-leve-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom4.jpg?ims=120x"
              alt=""
            />
          </td>
          <td>
            <strong>Tênis dos fluxo</strong>
            <span>R$ 129,90</span>
          </td>
          <td>
            <div>
              <button onClick={() => {}} type="button">
                <MdRemoveCircleOutline color="#7159c1" size={20} />
              </button>
              <input readOnly type="number" value="1" />
              <button onClick={() => {}} type="button">
                <MdAddCircleOutline color="#7159c1" size={20} />
              </button>
            </div>
          </td>
          <td>
            <strong>R$ 129,90</strong>
          </td>
          <td>
            <button type="button" onClick={() => {}}>
              <MdDelete color="#7159c1" size={20} />
            </button>
          </td>
        </tbody>
      </ProductTable>

      <footer>
        <Total>
          <span>Total:</span>
          <strong>R$ 129,90</strong>
        </Total>
        <button type="button">Finalizar pedido</button>
      </footer>
    </Container>
  );
}
