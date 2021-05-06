import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { useAppSelector } from '../../hooks/reduxHooks';

export const Offers: FC = () => {
  const { offers } = useAppSelector((state) => state.shop);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={styles.title}>Offers & Deals</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={offers}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) =>
            <Text>{item.title}</Text>
          }
        />
      </View>
    </View>
  );
};
