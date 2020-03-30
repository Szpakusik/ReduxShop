import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';


export default combineReducers({
  loginReducer,
  categoryReducer,
  cartReducer,
  productReducer
});
