import { ActionType } from './actionTypes';
import { UserAction } from './types';
import { IUser, IUserState, ILocationGeocode } from '../../shared/interfaces';

const initialState: IUserState = {
  user: {} as IUser,
  location: {} as ILocationGeocode,
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
