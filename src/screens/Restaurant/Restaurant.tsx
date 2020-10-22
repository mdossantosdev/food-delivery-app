import React, { FC } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { BackButton } from '../../components/BackButton';

export const Restaurant: FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>{restaurant.name}</Text>
      </View>
      <View style={styles.contentContainer}>
        <ImageBackground
          source={{ uri: `${restaurant.images[0]}`}}
          style={styles.imageBackground}
        >
          <View style={styles.textContainer}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.address}>{restaurant.address}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
