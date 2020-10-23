import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

export type FoodDetailsNavigationProp = StackNavigationProp<
  HomeStackParamList,
  Routes.FoodDetails
>;

export type FoodDetailsRouteProp = RouteProp<
  HomeStackParamList,
  Routes.FoodDetails
>;
