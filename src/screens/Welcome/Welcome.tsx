import React, { FC, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { WelcomeNavigationProp } from './types';
import { Routes } from '../../navigation/routes';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { updateLocation } from '../../redux/user/actions';
import { checkPermission, getCurrentLocation, formatCurrentLocation } from '../../utils/location';

export const Welcome: FC = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();
  const dispatch = useAppDispatch();

  const [address, setAddress] = useState<string | undefined>('Waiting for Current Location');

  useEffect(() => {
    (async () => {
      const hasPermission = await checkPermission();

      if (hasPermission) {
        const location = await getCurrentLocation();

        if (location && location.length > 0) {
          const currentAddress = formatCurrentLocation(location[0]);

          setAddress(currentAddress);
          dispatch(updateLocation(location[0]));

          setTimeout(() => {
            navigation.navigate(Routes.BottomTab);
          }, 2000)
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.deliveryIcon} source={require('../../images/food_delivery_icon.png')} />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>{address}</Text>
      </View>
    </View>
  );
};
