import { ActionType } from './actionTypes';
import { LocationObject } from 'expo-location';

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: LocationObject;
}

interface UserErrorAction {
  type: typeof ActionType.USER_ERROR;
  payload: unknown;
}

export type UserAction = UpdateLocationAction | UserErrorAction;
