import React, { FC } from 'react';
import { TouchableOpacity, ImageBackground, View, Text } from 'react-native';

import { styles } from './styles';
import { Props } from './types';

export const RestaurantFoodCard: FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <ImageBackground source={{ uri: `${item.images[0]}`}} style={styles.imageBackground}>
        <View style={styles.textImageContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
