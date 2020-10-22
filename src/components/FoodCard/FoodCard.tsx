import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Props } from './types';

export const FoodCard: FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: `${item.images[0]}`}} style={styles.image} />
      <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textCategory}>{item.category}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>$ {item.price}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};
