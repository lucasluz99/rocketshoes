import { call, all, takeLatest, select, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateAmountSuccess, addToCartSuccess } from './actions';
import { openModal } from '../modal/actions';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
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
    yield put(openModal(product));
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

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
