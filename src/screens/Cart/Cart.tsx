import React, { FC, useState, useEffect, createRef } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PaymentTypePopup from 'react-native-raw-bottom-sheet';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { FoodCard } from '../../components/FoodCard';
import { ButtonWithTitle } from '../../components/ButtonWithTitle';
import { BottomSheetPayment } from '../../components/BottomSheetPayment';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { createOrder } from '../../redux/user/actions';
import { Routes } from '../../navigation/routes';

export const Cart: FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { cart, user, location, orders } = useAppSelector((state) => state.user);

  const [totalAmount, setTotalAmount] = useState(0);

  const popupRef = createRef<PaymentTypePopup>();

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

  const validateOrder = () => {
    if (!user || !user.verified) {
      return navigation.navigate(Routes.Login);
    }

    popupRef.current?.open();
  }

  const placeOrder = () => {
    dispatch(createOrder(cart, user));
    popupRef.current?.close();
  }

  const popupView =  () => {
    const customStyles = {
      draggableIcon: {
        backgroundColor: 'rgb(143, 143, 143)'
      },
      container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }
    };

    return (
      <PaymentTypePopup
        ref={popupRef}
        closeOnDragDown
        height={360}
        customStyles={customStyles}
      >
        <BottomSheetPayment
          amount={totalAmount}
          location={location}
          placeOrder={placeOrder}
        />
      </PaymentTypePopup>
    )
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
          onPress={validateOrder}
        />
      </View>
      {popupView()}
    </View>
  );
};
