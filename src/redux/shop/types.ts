import { ActionType } from './actionTypes';
import { IFoodAvailability, IFoodItem, IOffer, IRestaurant } from '../../shared/interfaces';

interface AvailabilityAction {
  type: typeof ActionType.AVAILABILITY;
  payload: IFoodAvailability;
}

interface FoodSearchAction {
  type: typeof ActionType.FOOD_SEARCH;
  payload: IFoodItem[];
}

interface OfferSearchAction {
  type: typeof ActionType.OFFER_SEARCH;
  payload: IOffer[];
}

interface TopRestaurantsAction {
  type: typeof ActionType.TOP_RESTAURANTS;
  payload: IRestaurant[];
}

interface ShopErrorAction {
  type: typeof ActionType.SHOP_ERROR;
  payload: any;
}

export type ShopAction =
  | AvailabilityAction
  | FoodSearchAction
  | OfferSearchAction
  | TopRestaurantsAction
  | ShopErrorAction;
