import React, { FC, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { HomeNavigationProp } from './types';
import { Routes } from '../../navigation/routes';
import { SearchBar } from '../../components/SearchBar';
import { CategoryCard } from '../../components/CategoryCard';
import { RestaurantCard } from '../../components/RestaurantCard';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  availabilityByPostCode,
  foodSearch,
  getTopRestaurants,
  getFoodsIn30Min
} from '../../redux/shop/actions';

export const Home: FC = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const dispatch = useAppDispatch();

  const {
    location: { name, postalCode, city }
  } = useAppSelector((state) => state.user);

  const {
    availability: { categories },
    topRestaurants,
    foods30Min
  } = useAppSelector((state) => state.shop);

  useEffect(() => {
    dispatch(availabilityByPostCode(postalCode || '75001'));
    dispatch(getTopRestaurants(postalCode || '75001'));
    dispatch(getFoodsIn30Min(postalCode || '75001'));

    setTimeout(() => {
      dispatch(foodSearch(postalCode || '75001'));
    }, 1000)
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addressContainer}>
          <Image
            style={styles.deliveryIcon}
            source={require('../../images/food_delivery_icon.png')}
          />
          <Text style={styles.addressText}>
            {`${name}, ${postalCode}, ${city}`}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Icon name='square-edit-outline' style={styles.editIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar
            onTouchStart={() => navigation.navigate(Routes.Search)}
            onChangeText={() => {}}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) =>
              <CategoryCard item={item} onPress={() => alert(`${item.title}`)} />
            }
            keyExtractor={(item) => `${item.id}`}
          />
          <View>
            <Text style={styles.title}>Top Restaurants</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={topRestaurants}
            keyExtractor={(item) => `${item._id}`}
            renderItem={({ item }) =>
              <RestaurantCard
                item={item}
                onPress={() => navigation.navigate(Routes.Restaurant, { restaurant: item })}
              />
            }
          />
          <View>
            <Text style={styles.title}>30 Minutes Foods</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={foods30Min}
            keyExtractor={(item) => `${item._id}`}
            renderItem={({ item }) =>
              <RestaurantCard
                item={item}
                onPress={() => navigation.navigate(Routes.FoodDetails, { food: item })}
              />
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};
