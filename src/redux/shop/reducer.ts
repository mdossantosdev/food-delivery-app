import { ActionType } from './actionTypes';
import { ShopAction } from './types';
import { IShopState } from '../../shared/interfaces';

const initialState: IShopState = {
  categories: [],
  availableFoods: [],
  topRestaurants: [],
  foods30Min: [],
  offers: [],
  error: undefined,
}

export const shopReducer = (state = initialState, action: ShopAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case ActionType.FOOD_SEARCH:
      return {
        ...state,
        availableFoods: payload,
      };
    case ActionType.TOP_RESTAURANTS:
      return {
        ...state,
        topRestaurants: payload,
      };
    case ActionType.FOODS_30MIN:
      return {
        ...state,
        foods30Min: payload,
      };
    case ActionType.OFFER_SEARCH:
      return {
        ...state,
        offers: payload,
      };
    case ActionType.SHOP_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
