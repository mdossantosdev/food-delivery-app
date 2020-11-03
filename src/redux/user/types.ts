import { ActionType } from './actionTypes';
import { IFoodItem, ILocationGeocode } from '../../shared/interfaces';

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: ILocationGeocode;
}

interface AddToCArtAction {
  type: typeof ActionType.ADD_TO_CART;
  payload: IFoodItem;
}

interface UserErrorAction {
  type: typeof ActionType.USER_ERROR;
  payload: any;
}

export type UserAction =
  | UpdateLocationAction
  | AddToCArtAction
  | UserErrorAction;
