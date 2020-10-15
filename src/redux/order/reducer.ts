import { ActionType } from './actionTypes';
import { FoodAvailability } from '../../shared/interfaces';

const initialState = {
  availability: {} as FoodAvailability,
  error: undefined,
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AVAILABILITY:
      return {
        ...state,
        availability: action.payload,
      };
    case ActionType.ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
