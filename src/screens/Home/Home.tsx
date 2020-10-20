import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { SearchBar } from '../../components/SearchBar';
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
      <View style={styles.contentContainer}></View>
    </View>
  );
};
