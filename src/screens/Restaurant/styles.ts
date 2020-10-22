import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  contentContainer: {
    flex: 11,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  imageBackground: {
    width: screenWidth,
    height: 260,
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(234, 234, 234)',
  },
  textContainer: {
    height: 100,
    padding: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  name: {
    color: 'rgb(255, 255, 255)',
    fontSize: 28,
    fontWeight: '600',
  },
  address: {
    color: 'rgb(255, 255, 255)',
    fontSize: 20,
    fontWeight: '500',
  },
});
