import { Alert } from 'react-native';

export const showAlert = (title: string, message: string, func?: void) => {
  return Alert.alert(
    title,
    message,
    [
      { text: 'OK', onPress: () => func }
    ]
  )
};
