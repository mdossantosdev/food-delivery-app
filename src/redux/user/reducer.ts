import { ActionType } from './actionTypes';
import { UserAction } from './types';
import { User, UserState, LocationGeocode } from '../../shared/interfaces';

const initialState: UserState = {
  user: {} as User,
  location: {} as LocationGeocode,
  error: undefined,
}

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionType.UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case ActionType.USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
