import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: 230,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
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
    width: width - 20,
    height: 220,
    borderRadius: 20,
    backgroundColor: 'rgb(234, 234, 234)',
  },
  imageBackground: {
    width: width - 20,
    height: 220,
    justifyContent: 'flex-end',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgb(234, 234, 234)',
  },
  textImageContainer: {
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgb(255, 255, 255)',
  },
});
