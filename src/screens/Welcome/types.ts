import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

export type WelcomeNavigationProp = StackNavigationProp<
  AppStackParamList,
  Routes.Welcome
>;
