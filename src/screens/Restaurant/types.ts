import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

export type RestaurantNavigationProp = StackNavigationProp<
  HomeStackParamList,
  Routes.Restaurant
>;

export type RestaurantRouteProp = RouteProp<
  HomeStackParamList,
  Routes.Restaurant
>;
