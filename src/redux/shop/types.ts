import { ActionType } from './actionTypes';
import { IFoodAvailability, IFoodItem } from '../../shared/interfaces';

interface AvailabilityAction {
  type: typeof ActionType.AVAILABILITY;
  payload: IFoodAvailability;
}

interface FoodSearchAction {
  type: typeof ActionType.FOOD_SEARCH;
  payload: IFoodItem[];
}

interface ShopErrorAction {
  type: typeof ActionType.SHOP_ERROR;
  payload: any;
}

export type ShopAction = AvailabilityAction | FoodSearchAction | ShopErrorAction;
