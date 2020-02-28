import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        draft.splice(productIndex, 1);
      });
    case '@cart/UPDATE_AMOUNT':
      return produce(state, draft => {
        if (action.amount === 0) return;

        const productIndex = draft.findIndex(p => p.id === action.id);

        draft[productIndex].amount = action.amount;
      });
    default:
      return state;
  }
}
