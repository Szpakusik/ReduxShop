import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import pageReducer from './pageReducer';
import orderReducer from './orderReducer';


export default combineReducers({
  loginReducer,
  categoryReducer,
  cartReducer,
  productReducer,
  pageReducer,
  orderReducer,
});
