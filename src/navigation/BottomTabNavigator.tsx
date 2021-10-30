import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Routes } from './routes';
import { BottomTabStackParamList } from './types';
import { HomeNavigator } from './HomeNavigator';
import { CartNavigator } from './CartNavigator';
import { AccountNavigator } from './AccountNavigator';
import { Offers } from '../screens/Offers';

const BottomTab = createBottomTabNavigator<BottomTabStackParamList>();

const TabBarIcon = (props: any) => {
  return <Icon {...props} size={26} />
};

export const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={Routes.HomeNavigator}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgb(41, 143, 163)',
        tabBarInactiveTintColor: 'rgb(143, 143, 143)',
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
        name={Routes.Offers}
        component={Offers}
        options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='tag' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={Routes.CartNavigator}
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='cart' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={Routes.AccountNavigator}
        component={AccountNavigator}
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
