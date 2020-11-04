import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { FoodCard } from '../../components/FoodCard';
import { useAppSelector } from '../../hooks/reduxHooks';

export const Cart: FC = () => {
  const { cart } = useAppSelector((state) => state.user);

  if (cart.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyText}>Your Cart is Empty</Text>
        <Icon name='cart-outline' style={styles.emptyIcon} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cart</Text>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cart}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) =>
            <FoodCard
              item={item}
              onPress={() => {}}
            />
          }
        />
      </View>
      <View style={styles.amountContainer}>
        <View style={styles.amountInnerContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>$ {55}</Text>
        </View>
      </View>
    </View>
  );
};
