import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { ILocationGeocode } from '../shared/interfaces';

export const checkPermission = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

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
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentLocation = async () => {
  try {
    let currentLocation;

    const { coords }: Location.LocationObject = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest
    });

    if (coords) {
      const { latitude, longitude } = coords;

      const response: ILocationGeocode[] = await Location.reverseGeocodeAsync({ latitude, longitude });

      currentLocation = response;
    }

    return currentLocation;
  } catch (error) {
    console.log(error);
  }
};

export const formatCurrentLocation = (location: ILocationGeocode) => {
  try {
    const currentAddress: string = `${location.name}, ${location.postalCode}, ${location.city}, ${location.country}`;

    return currentAddress;
  } catch (error) {
    console.log(error);
  }
};
