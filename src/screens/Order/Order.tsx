import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { OrderNavigationProp } from './types';
import { BackButton } from '../../components/BackButton';
import { useAppSelector } from '../../hooks/reduxHooks';

export const Order: FC = () => {
  const navigation = useNavigation<OrderNavigationProp>();
  const { orders } = useAppSelector((state) => state.user);

  if (orders.length === 0) {
    return (
      <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.iconContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>Orders</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.emptyText}>Your Orders are Empty</Text>
      </View>
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.iconContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>Orders</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orders}
          renderItem={({ item }) =>
            <Text>{item._id}</Text>
          }
          keyExtractor={(item) => `${item._id}`}
        />
      </View>
    </View>
  )
};
