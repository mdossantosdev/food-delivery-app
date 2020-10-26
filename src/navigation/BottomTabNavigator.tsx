import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { BottomTabStackParamList } from './types';
import { Routes } from './routes';
import { HomeNavigator } from './HomeNavigator';
import { Cart } from '../screens/Cart';

const BottomTab = createBottomTabNavigator<BottomTabStackParamList>();

const TabBarIcon = (props: any) => {
  return <Icon {...props} size={26} />
};

export const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={Routes.HomeNavigator}
      tabBarOptions={{
        activeTintColor: 'rgb(41, 143, 163)',
        inactiveTintColor: 'rgb(143, 143, 143)',
      }}
    >
      <BottomTab.Screen
        name={Routes.HomeNavigator}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='home' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={Routes.Offer}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Offer',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='tag' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={Routes.Cart}
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='cart' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={Routes.Account}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='account' color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};
