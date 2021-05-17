import React, { FC } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { FoodDetailsNavigationProp, FoodDetailsRouteProp } from './types';
import { BackButton } from '../../components/BackButton';
import { FoodCard } from '../../components/FoodCard';
import { useAppSelector } from '../../hooks/reduxHooks';
import { checkExistence } from '../../utils/cart';

export const FoodDetails: FC = () => {
  const navigation = useNavigation<FoodDetailsNavigationProp>();
  const route = useRoute<FoodDetailsRouteProp>();

  const { food } = route.params;
  const { cart } = useAppSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.iconContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>{food.name}</Text>
      </View>
      <View style={styles.contentContainer}>
        <ImageBackground
          source={{ uri: `${food.images[0]}` }}
          style={styles.image}
        >
          <View style={styles.textImageContainer}>
            <Text style={styles.nameText}>{food.name}</Text>
            <Text style={styles.categoryText}>{food.category}</Text>
          </View>
        </ImageBackground>
        <View style={styles.innerContentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textFood}>Food will be ready within
              <Text style={styles.textReadyTime}> {food.readyTime} Minutes</Text>
            </Text>
            <Text> • {food.description}</Text>
          </View>
          <View style={styles.foodCardContainer}>
            <FoodCard  item={checkExistence(food, cart)} onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};
