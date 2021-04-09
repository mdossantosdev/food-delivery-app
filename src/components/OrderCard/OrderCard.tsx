import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Props } from './types';

export const OrderCard: FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.orderContainer}>
          <Text style={styles.orderIdText}>Order ID: {item.orderId}</Text>
          <Text style={styles.orderDateText}>{item.orderDate}</Text>
          <Text style={styles.orderAmountText}>${item.totalAmount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
