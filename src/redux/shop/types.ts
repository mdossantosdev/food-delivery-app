import { ActionType } from './actionTypes';
import { FoodAvailability } from '../../shared/interfaces';

interface AvailabilityAction {
  type: typeof ActionType.AVAILABILITY;
  payload: FoodAvailability;
}

interface ShopErrorAction {
  type: typeof ActionType.SHOP_ERROR;
  payload: unknown;
}

export type ShopAction = AvailabilityAction | ShopErrorAction;
