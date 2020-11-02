import { ActionType } from './actionTypes';
import { ILocationGeocode, IFoodItem } from '../../shared/interfaces';

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: ILocationGeocode;
}

interface UpdateCartAction {
  type: typeof ActionType.UPDATE_CART;
  payload: IFoodItem;
}

interface UserErrorAction {
  type: typeof ActionType.USER_ERROR;
  payload: any;
}

export type UserAction = UpdateLocationAction | UpdateCartAction | UserErrorAction;
