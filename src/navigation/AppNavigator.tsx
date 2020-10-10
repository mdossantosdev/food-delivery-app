import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Welcome'>
        <Stack.Screen  name='Welcome' component={Welcome} />
        <Stack.Screen  name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
