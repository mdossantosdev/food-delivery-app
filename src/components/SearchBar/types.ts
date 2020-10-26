export interface Props {
  onChangeText: Function;
  onTouchStart: () => void;
  onEndEditing?: () => void;
  autoFocus?: boolean;
}
