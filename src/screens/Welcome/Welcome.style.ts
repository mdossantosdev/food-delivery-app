import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(242, 242, 242)',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(125, 125, 125)',
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgb(41, 143, 163)',
  },
  addressText: {
    fontSize: 16,
    fontWeight: '200',
    color: 'rgb(79, 79, 79)',
  },
});

export default styles;
