import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { SearchScreenProps } from './types';
import { BackButton } from '../../components/BackButton';
import { SearchBar } from '../../components/SearchBar';
import { FoodCard } from '../../components/FoodCard';
import { Routes } from '../../navigation/routes';
import { useAppSelector } from '../../hooks/reduxHooks';
import { checkExistence } from '../../utils/cart';

export const Search: FC = () => {
  const navigation = useNavigation<SearchScreenProps>();

  const { availableFoods } = useAppSelector((state) => state.shop);
  const { cart } = useAppSelector((state) => state.user);

  const [keyword, setKeyword] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const foods = isEditing
    ? availableFoods.filter((item) => item.name.includes(keyword))
    : availableFoods;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <SearchBar
          onChangeText={setKeyword}
          onTouchStart={() => setIsEditing(true)}
          onEndEditing={() => setIsEditing(false)}
        />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={foods}
          renderItem={({item}) =>
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
