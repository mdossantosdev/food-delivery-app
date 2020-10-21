import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { SearchBar } from '../../components/SearchBar';
import { CategoryCard } from '../../components/CategoryCard';
import { RestaurantCard } from '../../components/RestaurantCard';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Routes } from '../../navigation/routes';

export const Home: FC = () => {
  const navigation = useNavigation();
  const { location } = useAppSelector(state => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addressContainer}>
          <Image
            style={styles.deliveryIcon}
            source={require('../../images/food_delivery_icon.png')}
          />
          <Text style={styles.addressText}>
            {`${location['name']}, ${location['postalCode']}, ${location['city']}`}
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
        <ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[{id: 1, title: '', icon: ''}]}
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
            data={[{_id: '369', images: []}]}
            renderItem={({ item }) =>
              <RestaurantCard item={item} onPress={() => {}} />
            }
            keyExtractor={(item) => `${item._id}`}
          />
          <View>
            <Text style={styles.title}>30 Minutes Foods</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
