import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: 'rgb(41, 143, 163)',
        inactiveTintColor: 'rgb(143, 143, 143)',
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='store' size={26} color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
