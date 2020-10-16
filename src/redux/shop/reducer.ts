import { ActionType } from './actionTypes';
import { FoodAvailability } from '../../shared/interfaces';

const initialState = {
  availability: {} as FoodAvailability,
  error: undefined,
}

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AVAILABILITY:
      return {
        ...state,
        availability: action.payload,
      };
    case ActionType.SHOP_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
