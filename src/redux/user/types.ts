import { ActionType } from './actionTypes';
import { LocationGeocode } from '../../shared/interfaces';

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: LocationGeocode;
}

interface UserErrorAction {
  type: typeof ActionType.USER_ERROR;
  payload: unknown;
}

export type UserAction = UpdateLocationAction | UserErrorAction;
