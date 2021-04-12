import { IFoodItem } from '../../shared/interfaces';

export interface Props {
  item: IFoodItem;
  quantity?: number | undefined;
  onPress: () => void;
}
