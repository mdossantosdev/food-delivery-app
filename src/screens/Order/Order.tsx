import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { OrderNavigationProp } from './types';

export const Order: FC = () => {
  const navigation = useNavigation<OrderNavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Order Screen</Text>
    </View>
  )
};
