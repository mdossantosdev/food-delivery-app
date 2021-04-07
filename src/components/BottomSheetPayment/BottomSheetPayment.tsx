import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { Props } from './types';

export const BottomSheetPayment: FC<Props> = ({ amount, location }) => {
  const { name, postalCode, city } = location;

  return (
    <View style={styles.container}>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payable Amount</Text>
        <Text style={styles.amountText}>${amount.toFixed(0)}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Image
          source={require('../../images/food_delivery_icon.png')}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressTextContainer}>
          <Text style={styles.addressTitle}>Address Used to Delivery</Text>
          <Text style={styles.addressText}>{`${name}, ${postalCode}, ${city}`}</Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps='always'
      >
        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.options} onPress={() => {}}>
            <Icon name='money-bill-wave' style={styles.cashIcon}/>
            <Text style={styles.iconText}>Cash on Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={() => {}}>
            <Icon name='credit-card' style={styles.creditCardIcon}/>
            <Text style={styles.iconText}>Card Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={() => {}}>
            <Icon name='bitcoin' style={styles.btcIcon}/>
            <Text style={styles.iconText}>Bitcoin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
};
