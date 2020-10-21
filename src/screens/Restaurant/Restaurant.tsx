import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const Restaurant: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Restaurant Screen</Text>
    </View>
  );
};
