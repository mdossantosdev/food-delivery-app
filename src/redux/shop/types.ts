import { ActionType } from './actionTypes';
import { IFoodAvailability } from '../../shared/interfaces';

interface AvailabilityAction {
  type: typeof ActionType.AVAILABILITY;
  payload: IFoodAvailability;
}

interface ShopErrorAction {
  type: typeof ActionType.SHOP_ERROR;
  payload: any;
}

export type ShopAction = AvailabilityAction | ShopErrorAction;
