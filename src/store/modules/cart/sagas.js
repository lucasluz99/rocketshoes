import { call, all, takeLatest, select, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  updateAmountSuccess,
  addToCartSuccess,
  calcShippingSuccess,
} from './actions';
import { openModal } from '../modal/actions';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';
import apiback from '../../../services/apiback';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.products.find(p => p.id === id)
  );

  const { data: stock } = yield call(api.get, `stock/${id}`);

  const productAmount = productExists ? productExists.amount : 0;

  const amount = productAmount + 1;

  if (amount > stock.amount) {
    toast.error(`Apenas ${stock.amount} produtos em estoque`);
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
    yield put(openModal(productExists));
  } else {
    const { data: product } = yield call(api.get, `products/${id}`);

    const data = {
      ...product,
      amount: 1,
      priceFormatted: formatPrice(product.price),
    };
    yield put(addToCartSuccess(data));
    yield put(openModal(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount === 0) {
    return;
  }

  const { data: stock } = yield call(api.get, `stock/${id}`);

  if (stock.amount < amount) {
    toast.error(`Apenas ${stock.amount} produtos em estoque`);
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

function* calcShipping({ zip }) {
  const { data: shipping } = yield call(apiback.post, '/shipping', { zip });

  const {
    Valor: price,
    PrazoEntrega: days,
  } = shipping.CalcPrecoPrazoResult.Servicos.cServico[0];

  const data = {
    zip,
    price,
    days,
  };

  console.log(data);

  yield put(calcShippingSuccess(data));
}
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/CALC_SHIPPING_REQUEST', calcShipping),
]);
