import { ActionType } from './actionTypes';
import { ILocationGeocode } from '../../shared/interfaces';

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: ILocationGeocode;
}

interface UserErrorAction {
  type: typeof ActionType.USER_ERROR;
  payload: any;
}

export type UserAction = UpdateLocationAction | UserErrorAction;
