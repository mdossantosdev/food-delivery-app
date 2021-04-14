import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { Login } from '../Login';
import { useAppSelector } from '../../hooks/reduxHooks';

export const Account: FC = () => {
  const { user } = useAppSelector((state) => state.user);

  const options = [
    {
      title: 'Edit Profile',
      action: () => {}
    },
    {
      title: 'View Orders',
      action: () => {}
    },
    {
      title: 'Contact Support',
      action: () => {}
    }
  ]

  const optionCard = (title: string, action: Function) => {
    return (
      <TouchableOpacity style={styles.cardContainer} key={title} onPress={() => action()}>
        <Text style={styles.textCard}>{title}</Text>
        <Icon name='chevron-right' style={styles.iconCard} />
      </TouchableOpacity>
    )
  }

  if (!user.token) return <Login />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Icon name='account' style={styles.avatar} />
        </View>
        <Text style={styles.emailText}>{user.email}</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView>
          { options.map(({ title, action }) => optionCard(title, action)) }
        </ScrollView>
      </View>
    </View>
  );
};
