import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './routes';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Restaurant } from '../screens/Restaurant';

const Stack = createStackNavigator();

export const HomeNavigator: FC = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Search} component={Search} />
      <Stack.Screen name={Routes.Restaurant} component={Restaurant} />
    </Stack.Navigator>
  );
};
