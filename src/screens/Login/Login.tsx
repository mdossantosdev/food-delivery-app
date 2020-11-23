import React, { FC, useState } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { TextInput } from '../../components/TextInput';
import { ButtonWithTitle } from '../../components/ButtonWithTitle';
import { ButtonLink } from '../../components/ButtonLink';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { login, register } from '../../redux/user/actions';

export const Login: FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [requestOtpTitle, setRequestOtpTitle] = useState('Request a New OTP in');

  const toggleScreen = () => {
    setIsRegister(!isRegister);
    setTitle(!isRegister ? 'Register' : 'Login');
  }

  const onPressAuthenticate = () => {
    isRegister
      ? dispatch(register(email, phone, password))
      : dispatch(login(email, password));
  }

  if (!verified) {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.otpContainer}>
              <Icon name='check-decagram' style={styles.otpIcon} />
              <Text style={styles.otpTitle}>Verification</Text>
              <Text style={styles.otpSubTitle}>Enter your OTP sent to your mobile number</Text>
              <TextInput
                placeholder='OTP'
                keyboardType={'numeric'}
                onChangeText={setOtp}
              />
              <ButtonWithTitle
                title='Verify OTP'
                onPress={() => console.log(otp)}
              />
              <ButtonLink
                title={requestOtpTitle}
                onPress={() => {}}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.deliveryIcon}
              source={require('../../images/food_delivery_icon.png')}
            />
            <TextInput
              placeholder={'Email'}
              keyboardType={'email-address'}
              onChangeText={setEmail}
            />
            {isRegister &&
              <TextInput
                placeholder={'Phone'}
                keyboardType={'numeric'}
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};
