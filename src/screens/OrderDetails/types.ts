import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { CartStackParamList } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

export type OrderDetailsNavigationProp = StackNavigationProp<
  CartStackParamList,
  Routes.OrderDetails
>;

export type OrderDetailsRouteProp = RouteProp<
  CartStackParamList,
  Routes.OrderDetails
>;
