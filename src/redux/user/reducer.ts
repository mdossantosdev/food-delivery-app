import { LocationObject } from 'expo-location';
import { ActionType } from './actionTypes';
import { UserState, UserAction } from './types';

const initialState: UserState = {
  user: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
  },
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
