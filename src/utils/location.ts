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

export const getCurrentLocation = async () => {
  try {
    let currentAddress: string = '';
    const { coords }: Location.LocationObject = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest
    });

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({ latitude, longitude });

      for (let item of response) {
        let address = `${item.name}, ${item.postalCode}, ${item.city}, ${item.country}`
        currentAddress = address;
      }
    }

    return currentAddress;
  } catch (err) {
    console.log(err);
  }
};
