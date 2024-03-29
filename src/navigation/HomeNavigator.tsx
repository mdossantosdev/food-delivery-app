import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './routes';
import { HomeStackParamList } from './types';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Restaurant } from '../screens/Restaurant';
import { FoodDetails } from '../screens/FoodDetails';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Search} component={Search} />
      <Stack.Screen name={Routes.Restaurant} component={Restaurant} />
      <Stack.Screen name={Routes.FoodDetails} component={FoodDetails} />
    </Stack.Navigator>
  );
};
