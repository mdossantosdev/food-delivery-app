import React, { FC, useEffect, useState } from 'react';
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
import { login, register, verifyOTP, otpRequest } from '../../redux/user/actions';

export const Login: FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [requestOtpTitle, setRequestOtpTitle] = useState('Request a new OTP in');
  const [canRequestOtp, setCanRequestOtp] = useState(false);

  let countDown: number;

  useEffect(() => {
    enableOtpRequest();

    return () => clearInterval(countDown);
  }, []);

  const toggleScreen = () => {
    setIsRegister(!isRegister);
    setTitle(!isRegister ? 'Register' : 'Login');
  }

  const onPressAuthenticate = () => {
    isRegister
      ? dispatch(register(email, phone, password))
      : dispatch(login(email, password));
  }

  const enableOtpRequest = () => {
    const otpDate = new Date();
    otpDate.setTime(new Date().getTime() + (2 * 60 * 1000));
    const otpTime = otpDate.getTime();

    countDown = setInterval(() => {
      const currentTime = new Date().getTime();
      const totalTime = otpTime - currentTime;

      let minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((totalTime % (1000 * 60)) / 1000);

      setRequestOtpTitle(`Request a new OTP in ${minutes}:${seconds}`);

      if (minutes < 1 && seconds < 1) {
        setRequestOtpTitle('Request a new OTP');
        setCanRequestOtp(true);
        clearInterval(countDown);
      }
    }, 1000)
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
                isOtp={true}
                onChangeText={setOtp}
              />
              <ButtonWithTitle
                title='Verify OTP'
                onPress={() => console.log(otp)}
              />
              <ButtonLink
                title={requestOtpTitle}
                disabled={!canRequestOtp}
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
