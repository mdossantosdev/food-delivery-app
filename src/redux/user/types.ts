import { ActionType } from './actionTypes';
import { IFoodItem, ILocationGeocode } from '../../shared/interfaces';

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: ILocationGeocode;
}

interface AddToCartAction {
  type: typeof ActionType.ADD_TO_CART;
  payload: IFoodItem;
}

interface RemoveFromCart {
  type: typeof ActionType.REMOVE_FROM_CART;
  payload: IFoodItem;
}

interface UserErrorAction {
  type: typeof ActionType.USER_ERROR;
  payload: any;
}

export type UserAction =
  | UpdateLocationAction
  | AddToCartAction
  | RemoveFromCart
  | UserErrorAction;
