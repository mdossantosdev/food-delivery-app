import { IRestaurant, IFoodItem } from '../../shared/interfaces';

export interface Props {
  item: IRestaurant | IFoodItem;
  onPress: Function;
}
