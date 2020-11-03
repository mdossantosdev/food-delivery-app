import React, { FC } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { RestaurantNavigationProp, RestaurantRouteProp } from './types';
import { BackButton } from '../../components/BackButton';
import { FoodCard } from '../../components/FoodCard';
import { Routes } from '../../navigation/routes';
import { useAppSelector } from '../../hooks/reduxHooks';
import { checkExistence } from '../../utils/cart';

export const Restaurant: FC = () => {
  const navigation = useNavigation<RestaurantNavigationProp>();
  const route = useRoute<RestaurantRouteProp>();

  const { restaurant } = route.params;
  const { cart } = useAppSelector((state) => state.user);

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
              item={checkExistence(item, cart)}
              onPress={() => navigation.navigate(Routes.FoodDetails, { food: item })}
            />
          }
          keyExtractor={(item) => `${item._id}`}
        />
      </View>
    </View>
  );
};
