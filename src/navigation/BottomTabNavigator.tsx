import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Routes } from './routes';
import { Home } from '../screens/Home';

const BottomTab = createBottomTabNavigator();

const TabBarIcon = (props: any) => {
  return <Icon {...props} size={26} />
};

export const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={Routes.Home}
      tabBarOptions={{
        activeTintColor: 'rgb(41, 143, 163)',
        inactiveTintColor: 'rgb(143, 143, 143)',
      }}
    >
      <BottomTab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='home' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={Routes.Offer}
        component={Home}
        options={{
          tabBarLabel: 'Offer',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='tag' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={Routes.Cart}
        component={Home}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='cart' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={Routes.Account}
        component={Home}
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
