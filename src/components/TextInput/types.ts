export interface Props {
  placeholder: string;
  keyboardType?: 'email-address' | 'numeric';
  secureText?: boolean;
  isOtp?: boolean;
  onChangeText: Function;
}
