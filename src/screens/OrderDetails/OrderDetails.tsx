import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { OrderDetailsNavigationProp, OrderDetailsRouteProp } from './types';
import { useNavigation, useRoute } from '@react-navigation/native';

export const OrderDetails: FC = () => {
  const navigation = useNavigation<OrderDetailsNavigationProp>();
  const route = useRoute<OrderDetailsRouteProp>();

  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text>OrderDetails Screen</Text>
    </View>
  );
};
