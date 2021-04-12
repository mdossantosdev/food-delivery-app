import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';

import { styles } from './styles';
import { OrderDetailsNavigationProp, OrderDetailsRouteProp } from './types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { FoodCard } from '../../components/FoodCard';

export const OrderDetails: FC = () => {
  const navigation = useNavigation<OrderDetailsNavigationProp>();
  const route = useRoute<OrderDetailsRouteProp>();

  const { order } = route.params;

  const headerOrder = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.orderText}>Order Date: {moment(order.orderDate).format('MMMM Do YY, h:mm a')}</Text>
        <Text style={styles.orderText}>Order Amount: ${order.totalAmount}</Text>
        <Text style={styles.orderText}>Paid Through: {order.paidThrough}</Text>
        <Text style={styles.orderText}>Status: {order.orderStatus}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.iconContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>Order ID: {order.orderId}</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={order.items}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) =>
            <FoodCard
              item={item.food}
              quantity={item.quantity}
              onPress={() => {}}
            />
          }
          ListHeaderComponent={headerOrder()}
        />
      </View>
    </View>
  );
};
