import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(41, 143, 163)',
    borderRadius: 10,
    borderWidth: 0.5,
    height: 52,
    width: 32,
  },
  innerButton: {
    fontSize: 20,
    color: 'rgb(41, 143, 163)',
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
