import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Props } from './types';

export const QuantityButtons: FC<Props> = ({ addItem, removeItem, quantity = 0 }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => removeItem()}>
        <Text style={styles.innerButton}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => addItem()}>
        <Text style={styles.innerButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
