import { LocationObject } from 'expo-location';
import { ActionType } from './actionTypes';
import { UserAction } from './types';
import { User, UserState } from '../../shared/interfaces';

const initialState: UserState = {
  user: {} as User,
  location: {} as LocationObject,
  error: undefined,
}

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionType.UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
};
