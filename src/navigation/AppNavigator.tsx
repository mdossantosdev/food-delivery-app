import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AppStackParamList } from './types';
import { Routes } from './routes';
import { TabNavigator } from './TabNavigator';
import { Welcome } from '../screens/Welcome';

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Welcome}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.Tab} component={TabNavigator} />
    </Stack.Navigator>
  );
};
