import { ActionType } from './actionTypes';
import { ShopAction } from './types';
import { IShopState } from '../../shared/interfaces';

const initialState: IShopState = {
  availableFoods: [],
  topRestaurants: [],
  foods30Min: [],
  offers: [],
  error: undefined,
}

export const shopReducer = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case ActionType.FOOD_SEARCH:
      return {
        ...state,
        availableFoods: action.payload,
      };
    case ActionType.TOP_RESTAURANTS:
      return {
        ...state,
        topRestaurants: action.payload,
      };
    case ActionType.FOODS_30MIN:
      return {
        ...state,
        foods30Min: action.payload,
      };
    case ActionType.OFFER_SEARCH:
      return {
        ...state,
        offers: action.payload,
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
