import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  shipping: {
    zip: '',
    days: 0,
    price: 0,
  },
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.products.push(action.product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(p => p.id === action.id);
        draft.products.splice(productIndex, 1);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(p => p.id === action.id);

        draft.products[productIndex].amount = Number(action.amount);
      });
    case '@cart/CALC_SHIPPING_SUCCESS': {
      return produce(state, draft => {
        draft.shipping = action.infos;
        console.log(state);
      });
    }
    default:
      return state;
  }
}
