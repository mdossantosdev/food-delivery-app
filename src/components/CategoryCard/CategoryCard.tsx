import React, { FC } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import { styles } from './styles';
import { Props } from './types';

export const CategoryCard: FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <View style={styles.shadowBox}>
        <Image source={{ uri: `${item.icon}` }} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};
