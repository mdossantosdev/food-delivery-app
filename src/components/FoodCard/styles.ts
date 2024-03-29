import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: width - 20,
    height: 102,
    margin: 10,
    borderWidth: 1,
    borderColor: 'rgb(234, 234, 234)',
    borderRadius: 20,
    shadowColor: 'rgb(23, 23, 23)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: 'rgb(234, 234, 234)',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 8,
    padding: 10,
  },
  textName: {
    fontSize: 14,
    fontWeight: '600',
  },
  textCategory: {
    fontSize: 14,
  },
  priceContainer: {
    flex: 4,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgb(0, 0, 0)'
  },
});
