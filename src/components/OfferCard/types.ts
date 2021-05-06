import { IOffer } from '../../shared/interfaces';

export interface Props {
  item: IOffer;
  onPressApply: Function;
  onPressRemove: Function;
  isApplied: boolean;
}
