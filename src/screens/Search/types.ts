import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

export type SearchScreenProps = StackNavigationProp<
  HomeStackParamList,
  Routes.Search
>;
