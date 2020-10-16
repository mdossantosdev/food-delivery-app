import { ActionType } from './actionTypes';
import { ShopAction } from './types';
import { FoodAvailability, ShopState } from '../../shared/interfaces';

const initialState: ShopState = {
  availability: {} as FoodAvailability,
  error: undefined,
}

export const shopReducer = (state = initialState, action: ShopAction) => {
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
