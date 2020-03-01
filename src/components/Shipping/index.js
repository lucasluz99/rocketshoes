import React from 'react';

import { Container, Infos } from './styles';

export default function Shipping() {
  return (
    <Container>
      <div>
        <input placeholder="Digite seu CEP" maxLength="8" />
        <button type="submit" onClick={() => {}}>
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
            <td>10dias</td>
            <td>R$ 30,00</td>
          </tr>
        </tbody>
      </Infos>
    </Container>
  );
}
