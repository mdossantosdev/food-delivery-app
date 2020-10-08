import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import LandingScreen from './src/screens/LandingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LandingScreen />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
