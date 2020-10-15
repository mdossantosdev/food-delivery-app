import { ActionType } from './actionTypes';
import { LocationObject } from 'expo-location';

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: LocationObject;
}

export type UserAction = UpdateLocationAction;
