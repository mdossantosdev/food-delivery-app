import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 20,
    height: 300,
    margin: 10,
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
    width: width - 20,
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'rgb(234, 234, 234)',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'rgba(41, 143, 163, 0.4)',
  },
  textContainer: {
    flex: 7.5,
    padding: 10,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 3,
  },
  descriptionText: {
    fontSize: 12,
  },
  buttonContainer: {
    flex: 4.5,
    padding: 10,
  },
  removeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: 'rgb(235, 71, 71)',
  },
  applyButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: 'rgb(41, 143, 163)',
  },
  textButton: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgb(255, 255, 255)',
  },
  promoCodeText: {
    fontSize: 10,
    color: 'rgb(255, 255, 255)',
    margin: 5,
  },
});
