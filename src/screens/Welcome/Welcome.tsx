import React, { FC, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Welcome.style';
import { checkPermission, getCurrentLocation } from '../../utils/location';

export const Welcome: FC = () => {
  const [address, setAddress] = useState<string>('Waiting for Current Location');
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const hasPermission = await checkPermission();

      if (hasPermission) {
        const location = await getCurrentLocation();

        if (location && location.length > 0) {
          setAddress(location)
          setTimeout(() => {
            navigation.navigate('Home');
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
}
