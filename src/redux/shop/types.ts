import { ActionType } from './actionTypes';
import { IFoodItem, IOffer, IRestaurant, ICategory } from '../../shared/interfaces';

interface CategoriesAction {
  type: typeof ActionType.CATEGORIES;
  payload: ICategory[];
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

interface Foods30MinAction {
  type: typeof ActionType.FOODS_30MIN;
  payload: IFoodItem[];
}

interface ShopErrorAction {
  type: typeof ActionType.SHOP_ERROR;
  payload: any;
}

export type ShopAction =
  | CategoriesAction
  | FoodSearchAction
  | OfferSearchAction
  | TopRestaurantsAction
  | Foods30MinAction
  | ShopErrorAction;
