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
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);

  const toggleScreen = () => {
    setIsRegister(!isRegister);
    setTitle(!isRegister ? 'Register' : 'Login');
  }

  const onPressAuthenticate = () => {
    isRegister
      ? console.log('Register')
      : console.log('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.deliveryIcon}
          source={require('../../images/food_delivery_icon.png')}
        />
        <TextInput
          placeholder={'Email'}
          onChangeText={setEmail}
        />
        {isRegister &&
          <TextInput
            placeholder={'Phone'}
            onChangeText={setPhone}
          />
        }
        <TextInput
          placeholder={'Password'}
          secureText
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <ButtonWithTitle
            title={title}
            onPress={onPressAuthenticate}
          />
          <ButtonLink
            title={
              !isRegister ? 'No Account? Register Here' : 'Have an Account? Login Here'
            }
            onPress={toggleScreen}
          />
        </View>
      </View>
    </View>
  );
};
