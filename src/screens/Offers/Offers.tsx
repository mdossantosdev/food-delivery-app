import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { BackButton } from '../../components/BackButton';
import { OfferCard } from '../../components/OfferCard';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { getOffers } from '../../redux/shop/actions';
import { addOffer, removeOffer } from '../../redux/user/actions';
import { IOffer } from '../../shared/interfaces';
import { showAlert } from '../../utils/alert';

export const Offers: FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { offers } = useAppSelector((state) => state.shop);
  const { cart, offer, location: { postalCode } } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOffers(postalCode || '75001'));
  }, []);

  const onPressAddOffer = (offer: IOffer) => {
    let total = 0;

    cart.map((food) => {
      total += food.price * food.quantity;
    })

    const taxAmount = (total / 100 * 0.9) + 3;
    const orderAmount = taxAmount + total;

    if (orderAmount < offer.minValue) {
      return showAlert(
        'This offer is not applicable',
        `This offer is applicable with a minimum amount $${offer.minValue} only.`
      );
    }

    dispatch(addOffer(offer));

    return showAlert(
      'Offer applied',
      `Offer applied with discount of ${offer.offerPercentage}%`
    );
  }

  const onPressRemoveOffer = (offer: IOffer) => {
    dispatch(removeOffer(offer));
  }

  const checkIfExist = (offerApplied: IOffer) => {
    return offer._id !== undefined ? String(offerApplied._id) === String(offer._id) : false;
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.iconContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>Offers & Deals</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={offers}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) =>
            <OfferCard
              item={item}
              onPressApply={onPressAddOffer}
              onPressRemove={onPressRemoveOffer}
              isApplied={checkIfExist(item)}
            />
          }
        />
      </View>
    </View>
  );
};
