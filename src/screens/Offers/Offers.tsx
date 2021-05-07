import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { OfferCard } from '../../components/OfferCard';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { getOffers } from '../../redux/shop/actions';
import { removeOffer } from '../../redux/user/actions';
import { IOffer } from '../../shared/interfaces';

export const Offers: FC = () => {
  const dispatch = useAppDispatch();
  const { offers } = useAppSelector((state) => state.shop);
  const { location: { postalCode } } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOffers(postalCode || '75001'));
  }, []);

  const onPressRemoveOffer = (offer: IOffer) => {
    dispatch(removeOffer(offer));
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
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
              onPressApply={() => {}}
              onPressRemove={onPressRemoveOffer}
              isApplied={false}
            />
          }
        />
      </View>
    </View>
  );
};
