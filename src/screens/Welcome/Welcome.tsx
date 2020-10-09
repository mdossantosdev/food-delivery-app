import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Welcome.style';
import { checkPermission, getCurrentLocation } from '../../utils/location';

interface Props {}

const Welcome: React.FC<Props> = ({}) => {
  const [address, setAddress] = useState<string>('Waiting for Current Location');

  useEffect(() => {
    (async () => {
      const hasPermission = await checkPermission();

      if (hasPermission) {
        const location = await getCurrentLocation();

        if (location) setAddress(location);
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

export default Welcome;
