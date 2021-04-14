import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { AccountNavigationProp } from './types';
import { Login } from '../Login';
import { RedButton } from '../../components/RedButton';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Routes } from '../../navigation/routes';

export const Account: FC = () => {
  const navigation = useNavigation<AccountNavigationProp>();
  const { user } = useAppSelector((state) => state.user);

  const options = [
    {
      title: 'Edit Profile',
      action: () => {}
    },
    {
      title: 'View Orders',
      action: () => navigation.navigate(Routes.Orders)
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
        <RedButton title='Logout' onPress={() => {}} />
      </View>
    </View>
  );
};
