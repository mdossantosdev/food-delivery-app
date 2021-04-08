import { StackNavigationProp } from '@react-navigation/stack';
import { CartStackParamList } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

export type CartNavigationProp = StackNavigationProp<
  CartStackParamList,
  Routes.Cart
>;
