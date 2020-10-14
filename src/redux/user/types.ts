import { ActionType } from './actionTypes';
import { LocationObject } from 'expo-location';

export interface UserState {
  user: User;
  location: LocationObject;
  error: string | undefined;
}

interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface UpdateLocationAction {
  type: typeof ActionType.UPDATE_LOCATION;
  payload: LocationObject;
}

export type UserAction = UpdateLocationAction;
