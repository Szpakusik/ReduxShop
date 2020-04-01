import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import pageReducer from './pageReducer';


export default combineReducers({
  loginReducer,
  categoryReducer,
  cartReducer,
  productReducer,
  pageReducer,
});
