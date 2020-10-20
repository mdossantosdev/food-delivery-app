import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 140,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 10,
  },
  shadowBox: {
    width: 110,
    height: 110,
    shadowColor: 'rgb(23, 23, 23)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 20,
    backgroundColor: 'rgb(234, 234, 234)',
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    color: 'rgb(133, 133, 133)',
  },
});
