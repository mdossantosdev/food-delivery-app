import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './routes';
import { AccountStackParamList } from './types';
import { Account } from '../screens/Account';
import { Orders } from '../screens/Orders';
import { OrderDetails } from '../screens/OrderDetails';

const Stack = createStackNavigator<AccountStackParamList>();

export const AccountNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Account}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Account} component={Account}/>
      <Stack.Screen name={Routes.Orders} component={Orders} />
      <Stack.Screen name={Routes.OrderDetails} component={OrderDetails} />
    </Stack.Navigator>
  );
};
