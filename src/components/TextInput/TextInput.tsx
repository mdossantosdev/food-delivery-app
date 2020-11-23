import React, { FC } from 'react';
import { View, TextInput as Input} from 'react-native';

import { styles } from './styles';
import { Props } from './types';

export const TextInput: FC<Props> = ({
  placeholder,
  keyboardType,
  secureText = false,
  isOtp = false,
  onChangeText
}) => {
  return (
    <View style={styles.container}>
      <Input
        style={isOtp ? styles.otpInput : styles.input}
        placeholder={placeholder}
        placeholderTextColor={'rgba(90, 89, 89, 0.5)'}
        autoCapitalize='none'
        keyboardType={keyboardType}
        secureTextEntry={secureText}
        maxLength={ isOtp ? 6 : 60}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};
