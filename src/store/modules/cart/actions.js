export function addToCartSuccess(product) {
  return { type: '@cart/ADD_SUCCESS', product };
}

export function addToCartRequest(id) {
  return { type: '@cart/ADD_REQUEST', id };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function calcShippingRequest(zip) {
  return {
    type: '@cart/CALC_SHIPPING_REQUEST',
    zip,
  };
}

export function calcShippingSuccess(infos) {
  return {
    type: '@cart/CALC_SHIPPING_SUCCESS',
    infos,
  };
}

export function calcShippingError() {
  return {
    type: '@cart/CALC_SHIPPING_ERROR',
  };
}

export function resetShipping() {
  return {
    type: '@cart/RESET_SHIPPING',
  };
}
