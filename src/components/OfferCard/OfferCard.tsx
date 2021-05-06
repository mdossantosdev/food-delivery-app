import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Props } from './types';

export const OfferCard: FC<Props> = ({ item, onPressApply, onPressRemove, isApplied }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${item.images[0]}` }} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {isApplied ?
            <TouchableOpacity style={styles.removeButton} onPress={() => onPressRemove(item)}>
              <Text style={styles.textButton}>Remove</Text>
            </TouchableOpacity>
          :
            <TouchableOpacity style={styles.applyButton} onPress={() => onPressApply(item)}>
              <Text style={styles.textButton}>Apply</Text>
              <Text style={styles.promoCodeText}>{item.promoCode}</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
};
