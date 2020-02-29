import { combineReducers } from 'redux';

import cart from './modules/cart/reducer';
import modal from './modules/modal/reducer';

export default combineReducers({
  cart,
  modal,
});
