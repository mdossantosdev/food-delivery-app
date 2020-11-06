import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgb(0, 0, 0)',
  },
  contentContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryIcon: {
    width: 110,
    height: 110,
    marginVertical: 30,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
