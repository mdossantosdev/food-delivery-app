import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { styles } from './styles';
import { OrderNavigationProp } from './types';
import { Routes } from '../../navigation/routes';
import { BackButton } from '../../components/BackButton';
import { OrderCard } from '../../components/OrderCard';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { getOrders } from '../../redux/user/actions';

export const Orders: FC = () => {
  const navigation = useNavigation<OrderNavigationProp>();
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const { user, orders } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders(user));
  }, [isFocused]);

  if (orders.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <View style={styles.iconContainer}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text style={styles.title}>Orders</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.emptyText}>Your Orders are Empty</Text>
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
        <Text style={styles.title}>Orders</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orders}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) =>
            <OrderCard
              item={item}
              onPress={() => navigation.navigate(Routes.OrderDetails, { order: item })}
            />
          }
        />
      </View>
    </View>
  )
};
