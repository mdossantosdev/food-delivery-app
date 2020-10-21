import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    width: screenWidth - 20,
    height: 230,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 20,
    shadowColor: 'rgb(23, 23, 23)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: screenWidth - 20,
    height: 220,
    borderRadius: 20,
    backgroundColor: 'rgb(234, 234, 234)',
  },
});
