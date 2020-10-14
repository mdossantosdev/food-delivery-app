import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './routes';
import { Welcome } from '../screens/Welcome';
import { BottomTabNavigator } from './BottomTabNavigator';

const Stack = createStackNavigator();

export const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Welcome'>
        <Stack.Screen  name={Routes.Welcome} component={Welcome} />
        <Stack.Screen  name={Routes.BottomTab} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
