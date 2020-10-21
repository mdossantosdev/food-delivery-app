import { Restaurant, FoodItem } from '../../shared/interfaces';

export interface Props {
  item: Restaurant | FoodItem;
  onPress: Function;
}
