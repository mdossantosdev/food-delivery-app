import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { AntDesign as WarningIcon } from '@expo/vector-icons';

import { styles } from './styles';
import { Props } from './types';

export const OrderCard: FC<Props> = ({ item, onPress }) => {
  const orderStatus = () => {
    const status = item.orderStatus.toLowerCase();

    let statusIcon = <Icon name='progress-clock' style={styles.progressIcon} />;
    let statusMessage = status;

    if (status === 'completed') {
      statusMessage = 'Delivered';
      statusIcon = <Icon name='receipt' style={styles.orderIcon} />;
    }

    if (status === 'cancelled') {
      statusMessage = 'Cancelled';
      statusIcon = <WarningIcon name='warning' style={styles.warningIcon} />
    }

    return (
      <View style={styles.statusContainer}>
        {statusIcon}
        <Text style={styles.statusMessageText}>{statusMessage.toUpperCase()}</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.orderContainer}>
          <Text style={styles.orderIdText}>Order ID: {item.orderId}</Text>
          <Text style={styles.orderDateText}>{item.orderDate}</Text>
          <Text style={styles.orderAmountText}>${item.totalAmount}</Text>
        </View>
        {orderStatus()}
      </View>
    </TouchableOpacity>
  );
};
