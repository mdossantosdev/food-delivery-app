import { ActionType } from './actionTypes';
import { FoodAvailability } from '../../shared/interfaces';

interface AvailabilityAction {
  type: typeof ActionType.AVAILABILITY;
  payload: FoodAvailability;
}

interface OrderErrorAction {
  type: typeof ActionType.ORDER_ERROR;
  payload: unknown;
}

export type OrderAction = AvailabilityAction | OrderErrorAction;
