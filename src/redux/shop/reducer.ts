import { ActionType } from './actionTypes';
import { ShopAction } from './types';
import { IFoodAvailability, IShopState } from '../../shared/interfaces';

const initialState: IShopState = {
  availability: {} as IFoodAvailability,
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
