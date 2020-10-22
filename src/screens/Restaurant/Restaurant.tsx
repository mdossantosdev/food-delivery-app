import React, { FC } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { BackButton } from '../../components/BackButton';
import { FoodCard } from '../../components/FoodCard';

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
          <View style={styles.textImageContainer}>
            <Text style={styles.nameText}>{restaurant.name}</Text>
            <Text style={styles.addressText}>{restaurant.address}</Text>
          </View>
        </ImageBackground>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={restaurant.foods}
          renderItem={({ item }) =>
            <FoodCard
              item={item}
              onPress={() => {}}
            />
          }
          keyExtractor={(item) => `${item._id}`}
        />
      </View>
    </View>
  );
};
