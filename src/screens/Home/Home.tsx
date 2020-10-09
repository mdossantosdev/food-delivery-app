import React from 'react';
import { View, Text } from 'react-native';

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;
