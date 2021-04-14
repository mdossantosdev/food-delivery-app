import { StackNavigationProp } from '@react-navigation/stack';
import { AccountStackParamList } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

export type AccountNavigationProp = StackNavigationProp<
  AccountStackParamList,
  Routes.Account
>;
