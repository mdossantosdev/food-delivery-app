import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Home from '../screens/Home';

const BottomTab = createBottomTabNavigator();

const TabBarIcon = (props: any) => {
  return <Icon {...props} size={26} />
};

const BottomTabNavigator: React.FC = () => {
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
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='home' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name='Offer'
        component={Home}
        options={{
          tabBarLabel: 'Offer',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} name='tag' color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
