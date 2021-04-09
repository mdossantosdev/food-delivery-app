import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: width - 20,
    height: 102,
    marginBottom: 15,
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
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  orderContainer: {
    flex: 8,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: 5,
    paddingLeft: 15,
  },
  orderIdText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(0, 0, 0)',
  },
  orderDateText: {
    fontSize: 16,
    color: 'rgb(143, 143, 143)',
  },
  orderAmountText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgb(0, 0, 0)',
  },
});
