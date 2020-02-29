const INITIAL_STATE = {
  product: {},
  open: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@modal/OPEN':
      return {
        product: action.product,
        open: true,
      };
    case '@modal/CLOSE':
      return {
        product: {},
        open: false,
      };
    default:
      return state;
  }
}
