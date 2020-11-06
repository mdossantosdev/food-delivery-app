import { ActionType } from './actionTypes';
import { ILocationGeocode, IUser, IFoodItem } from '../../shared/interfaces';

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: ILocationGeocode;
}

interface LoginAction {
  type: typeof ActionType.LOGIN;
  payload: IUser;
}

interface RegisterAction {
  type: typeof ActionType.REGISTER;
  payload: IUser;
}

interface AddToCartAction {
  type: typeof ActionType.ADD_TO_CART;
  payload: IFoodItem;
}

interface RemoveFromCartAction {
  type: typeof ActionType.REMOVE_FROM_CART;
  payload: IFoodItem;
}

interface UserErrorAction {
  type: typeof ActionType.USER_ERROR;
  payload: any;
}

export type UserAction =
  | UpdateLocationAction
  | LoginAction
  | RegisterAction
  | AddToCartAction
  | RemoveFromCartAction
  | UserErrorAction;
