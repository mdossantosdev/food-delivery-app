import { ActionType } from './actionTypes';
import { ShopAction } from './types';
import { IFoodAvailability, IShopState, IOffer, IRestaurant } from '../../shared/interfaces';

const initialState: IShopState = {
  availability: {} as IFoodAvailability,
  availableFoods: [],
  offers: [] as IOffer[],
  topRestaurants: [] as IRestaurant[],
  error: undefined,
}

export const shopReducer = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case ActionType.AVAILABILITY:
      return {
        ...state,
        availability: action.payload,
      };
    case ActionType.FOOD_SEARCH:
      return {
        ...state,
        availableFoods: action.payload,
      };
    case ActionType.OFFER_SEARCH:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.TOP_RESTAURANTS:
      return {
        ...state,
        topRestaurants: action.payload,
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
