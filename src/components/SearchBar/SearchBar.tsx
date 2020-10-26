import React, { FC } from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';
import { Props } from './types';

export const SearchBar: FC<Props> = ({ onChangeText, onTouchStart, onEndEditing, autoFocus = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name='magnify' style={styles.searchIcon} />
        <TextInput
          style={styles.textInput}
          placeholder='Search Foods'
          placeholderTextColor='rgba(143, 143, 143, 0.6)'
          autoFocus={autoFocus}
          onTouchStart={onTouchStart}
          onEndEditing={onEndEditing}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
    </View>
  );
};
