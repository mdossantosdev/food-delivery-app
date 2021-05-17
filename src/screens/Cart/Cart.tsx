import React, { FC, useState, useEffect, createRef } from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PaymentTypePopup from 'react-native-raw-bottom-sheet';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { CartNavigationProp } from './types';
import { Routes } from '../../navigation/routes';
import { FoodCard } from '../../components/FoodCard';
import { ButtonWithTitle } from '../../components/ButtonWithTitle';
import { BottomSheetPayment } from '../../components/BottomSheetPayment';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { createOrder, removeOffer } from '../../redux/user/actions';
import { showAlert } from '../../utils/alert';

export const Cart: FC = () => {
  const navigation = useNavigation<CartNavigationProp>();
  const dispatch = useAppDispatch();
  const { cart, user, offer, location } = useAppSelector((state) => state.user);

  const [subTotal, setSubTotal] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(3);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const popupRef = createRef<PaymentTypePopup>();

  useEffect(() => {
    calculateTotal();
  }, [cart, offer]);

  const calculateTotal = () => {
    let subTotal = 0;

    cart.map((item) => subTotal += item.price * item.quantity);

    const serviceFee = subTotal / 100 * 10;

    if (subTotal > 0) setServiceFee(serviceFee);

    setSubTotal(subTotal);
    setTotal(subTotal + serviceFee + deliveryFee);
    setDiscount(0);

    if (offer._id !== undefined) {
      if (subTotal < offer.minValue) {
        return showAlert(
          'The applied offer is not applicable',
          `This offer is applicable with minimum $${offer.minValue} only! Please select another offer`,
          dispatch(removeOffer(offer))
        );
      }

      const discount = subTotal / 100 * offer.offerPercentage;
      setDiscount(discount);

      const afterDiscount = subTotal - discount;
      setTotal(afterDiscount + serviceFee + deliveryFee);
    }

    setSubTotal(subTotal);
  }

  const validateOrder = () => {
    if (!user || !user.verified) return navigation.navigate(Routes.Login);

    popupRef.current?.open();
  }

  const placeOrder = () => {
    dispatch(createOrder(cart, user));
    popupRef.current?.close();
    dispatch(removeOffer(offer));
  }

  const footerView = () => {
    return (
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.offerContainer}
          onPress={() => navigation.navigate(Routes.Offers)}
        >
          <View>
            <Text style={styles.footerTitle}>Offers & Deals</Text>
            {offer._id !== undefined ?
              <View>
                <Text style={styles.offerText}>{offer.offerPercentage}% of discount</Text>
              </View>
            :
              <View>
                <Text>You can apply available offers.</Text>
              </View>
            }
          </View>
          <Icon name='chevron-right' style={styles.offerIcon} />
        </TouchableOpacity>

        <View style={styles.receiptContainer}>
            <Text style={styles.footerTitle}>Receipt</Text>
            <View style={styles.receiptRow}>
              <Text style={styles.receiptTitle}>Subtotal</Text>
              <Text style={styles.receiptText}>${subTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.receiptRow}>
              <Text style={styles.receiptTitle}>Service Fee</Text>
              <Text style={styles.receiptText}>${serviceFee.toFixed(2)}</Text>
            </View>
            <View style={styles.receiptRow}>
              <Text style={styles.receiptTitle}>Delivery Fee</Text>
              <Text style={styles.receiptText}>${deliveryFee.toFixed(2)}</Text>
            </View>
            {offer._id !== undefined &&
              <View style={styles.receiptRow}>
                <Text style={styles.receiptTitle}>Discount ({offer.offerPercentage}% offer)</Text>
                <Text style={styles.receiptText}>-${discount.toFixed(2)}</Text>
              </View>
            }
            <View style={styles.receiptRow}>
              <Text style={styles.receiptTitle}>Total</Text>
              <Text style={styles.receiptText}>${total.toFixed(2)}</Text>
            </View>
        </View>
      </View>
    )
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
          amount={total}
          location={location}
          placeOrder={placeOrder}
        />
      </PaymentTypePopup>
    )
  }

  if (cart.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <Text style={styles.title}>My Cart</Text>
          { user.token &&
            <TouchableOpacity onPress={() => navigation.navigate(Routes.Orders)}>
              <Icon name='receipt' style={styles.ordersIcon} />
            </TouchableOpacity>
          }
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.emptyText}>Your Cart is Empty</Text>
          <Icon name='cart-outline' style={styles.emptyIcon} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={styles.title}>My Cart</Text>
        { user.token &&
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Orders)}>
            <Icon name='receipt' style={styles.ordersIcon} />
          </TouchableOpacity>
        }
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
          ListFooterComponent={footerView}
        />
      </View>
      <View style={styles.amountContainer}>
        <View style={styles.amountInnerContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>${total.toFixed(2)}</Text>
        </View>
        <ButtonWithTitle title={'Order Now'} onPress={validateOrder} />
      </View>
      {popupView()}
    </View>
  );
};
