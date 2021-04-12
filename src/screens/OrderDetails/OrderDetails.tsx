import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { OrderDetailsNavigationProp, OrderDetailsRouteProp } from './types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { FoodCard } from '../../components/FoodCard';

export const OrderDetails: FC = () => {
  const navigation = useNavigation<OrderDetailsNavigationProp>();
  const route = useRoute<OrderDetailsRouteProp>();

  const { order } = route.params;

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
              onPress={() => {}}
            />
          }
        />
      </View>
    </View>
  );
};
