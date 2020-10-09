import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const checkPermission = async () => {
  try {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return false;
    }

    return true;
  } catch (err) {
    console.log(err);
  }
};
