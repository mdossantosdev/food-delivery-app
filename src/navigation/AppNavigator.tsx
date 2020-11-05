import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AppStackParamList } from './types';
import { Routes } from './routes';
import { BottomTabNavigator } from './BottomTabNavigator';
import { Welcome } from '../screens/Welcome';

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator: FC = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName={Routes.Welcome}>
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.BottomTab} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
