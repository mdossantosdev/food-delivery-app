import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './routes';
import { CartStackParamList } from './types';
import { Cart } from '../screens/Cart';
import { Login } from '../screens/Login';
import { Orders } from '../screens/Orders';
import { OrderDetails } from '../screens/OrderDetails';

const Stack = createStackNavigator<CartStackParamList>();

export const CartNavigator: FC = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName={Routes.Cart} >
      <Stack.Screen name={Routes.Cart} component={Cart} />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Orders} component={Orders} />
      <Stack.Screen name={Routes.OrderDetails} component={OrderDetails} />
    </Stack.Navigator>
  );
};
