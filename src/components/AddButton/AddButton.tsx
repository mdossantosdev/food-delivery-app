import React, { FC } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Props } from './types';

export const AddButton: FC<Props> = ({ addItem }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => addItem()} >
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>
  );
};
