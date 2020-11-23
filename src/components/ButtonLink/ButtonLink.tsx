import React, { FC } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Props } from './types';

export const ButtonLink: FC<Props> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={disabled ? styles.titleInactive : styles.titleActive}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
