import { combineReducers } from 'redux';
import { userReducer } from '../user/reducer';
import { orderReducer } from '../order/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
});
