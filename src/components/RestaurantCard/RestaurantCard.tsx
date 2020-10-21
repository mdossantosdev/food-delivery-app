import React, { FC } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';
import { Props } from './types';

export const RestaurantCard: FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Image source={{ uri: `${item.images[0]}` }} style={styles.image} />
    </TouchableOpacity>
  );
};
