import { ActionType } from './actionTypes';
import { ILocationGeocode, IUser, IFoodItem, IOrder, IOffer } from '../../shared/interfaces';

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

interface CreateOrderAction {
  type: typeof ActionType.CREATE_ORDER;
  payload: any;
}

interface GetOrdersAction {
  type: typeof ActionType.GET_ORDERS;
  payload: IOrder[];
}

interface CancelOrderAction {
  type: typeof ActionType.CANCEL_ORDER;
  payload: IOrder[];
}

interface LogoutAction {
  type: typeof ActionType.LOGOUT;
}

interface AddOfferAction {
  type: typeof ActionType.ADD_OFFER;
  payload: IOffer;
}

interface RemoveOfferAction {
  type: typeof ActionType.REMOVE_OFFER;
  payload: IOffer;
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
  | CreateOrderAction
  | GetOrdersAction
  | CancelOrderAction
  | LogoutAction
  | AddOfferAction
  | RemoveOfferAction
  | UserErrorAction;
