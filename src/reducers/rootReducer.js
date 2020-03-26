import { combineReducers } from 'redux';

import someReducer from './someReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  categoryReducer,
  cartReducer,
  productReducer
});
