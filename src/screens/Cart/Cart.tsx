import React, { FC, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { FoodCard } from '../../components/FoodCard';
import { ButtonWithTitle } from '../../components/ButtonWithTitle';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Routes } from '../../navigation/routes';

export const Cart: FC = () => {
  const navigation = useNavigation();
  const { cart } = useAppSelector((state) => state.user);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateAmount();
  }, [cart]);

  const calculateAmount = () => {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.quantity;
    })
    setTotalAmount(total);
  }

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
          <Text style={styles.totalText}>$ {totalAmount}</Text>
        </View>
        <ButtonWithTitle
          title={'Order Now'}
          onPress={() => navigation.navigate(Routes.Login)}
        />
      </View>
    </View>
  );
};
