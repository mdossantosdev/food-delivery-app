import React, { FC, useState } from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { TextInput } from '../../components/TextInput';
import { ButtonWithTitle } from '../../components/ButtonWithTitle';
import { ButtonLink } from '../../components/ButtonLink';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { login } from '../../redux/user/actions';

export const Login: FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image style={styles.deliveryIcon} source={require('../../images/food_delivery_icon.png')} />
        <TextInput
          placeholder={'Email'}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder={'Password'}
          secureText
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <ButtonWithTitle
            title='Login'
            onPress={() => dispatch(login(email, password))}
          />
          <ButtonLink
            title={'No Account? Register Here'}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};
