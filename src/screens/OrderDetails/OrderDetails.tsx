import React, { FC } from 'react';
import { View, Text, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';

import { styles } from './styles';
import { OrderDetailsNavigationProp, OrderDetailsRouteProp } from './types';
import { BackButton } from '../../components/BackButton';
import { FoodCard } from '../../components/FoodCard';
import { RedButton } from '../../components/RedButton';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { cancelOrder } from '../../redux/user/actions';

export const OrderDetails: FC = () => {
  const navigation = useNavigation<OrderDetailsNavigationProp>();
  const route = useRoute<OrderDetailsRouteProp>();
  const dispatch = useAppDispatch();

  const { order } = route.params;
  const { user } = useAppSelector((state) => state.user);

  const onPressCancelOrder = () => {
    Alert.alert(
      'Do you want to cancel this order?',
      'Cancellation charges may apply according to the terms and conditions!',
      [
        { text: 'No', onPress: () => {}, style: 'cancel'},
        { text: 'Yes', onPress: () => {
          dispatch(cancelOrder(order, user));
          navigation.goBack();
        }}
      ]
    )
  }

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

  const footerOrder = () => {
    if (order.orderStatus.toLowerCase() === 'cancelled') {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Order is cancelled</Text>
        </View>
      )
    }

    return (
      <View>
        <View style={styles.mapContainer}>
          <Text>Map View</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RedButton title='Cancel Order' onPress={() => onPressCancelOrder()} />
        </View>
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
          ListFooterComponent={footerOrder()}
        />
      </View>
    </View>
  );
};
