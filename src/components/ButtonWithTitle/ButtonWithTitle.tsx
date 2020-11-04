import React, { FC } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Props } from './types';

export const ButtonWithTitle: FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
    >
      <Text style={styles.titleButton}>{title}</Text>
    </TouchableOpacity>
  );
};
