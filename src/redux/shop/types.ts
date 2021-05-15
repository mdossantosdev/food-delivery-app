import { ActionType } from './actionTypes';
import { IFoodItem, IOffer, IRestaurant, ICategories } from '../../shared/interfaces';

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

interface CategoriesAction {
  type: typeof ActionType.CATEGORIES;
  payload: ICategories;
}

interface ShopErrorAction {
  type: typeof ActionType.SHOP_ERROR;
  payload: any;
}

export type ShopAction =
  | FoodSearchAction
  | OfferSearchAction
  | TopRestaurantsAction
  | Foods30MinAction
  | CategoriesAction
  | ShopErrorAction;
