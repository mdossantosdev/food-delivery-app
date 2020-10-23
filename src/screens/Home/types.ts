import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

export type HomeScreenProps = StackNavigationProp<
  HomeStackParamList,
  Routes.Home
>;
