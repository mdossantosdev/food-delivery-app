import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { Props } from './types';

export const BackButton: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name='chevron-left' style={styles.icon} />
    </TouchableOpacity>
  );
};
