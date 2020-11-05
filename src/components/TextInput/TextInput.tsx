import React, { FC } from 'react';
import { View, TextInput as Input} from 'react-native';

import { styles } from './styles';
import { Props } from './types';

export const TextInput: FC<Props> = ({
  placeholder,
  secureText = false,
  onChangeText
}) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder={placeholder}
        placeholderTextColor={'rgb(90, 89, 89)'}
        autoCapitalize='none'
        secureTextEntry={secureText}
        onChangeText={(text) => onChangeText(text)}
        style={styles.input}
      />
    </View>
  );
};
