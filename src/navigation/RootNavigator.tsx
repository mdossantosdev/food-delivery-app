import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './AppNavigator';

export const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
