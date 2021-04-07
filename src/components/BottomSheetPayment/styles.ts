import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: 'rgba(41, 143, 163, 0.5)',
  },
  paymentTitle: {
    fontSize: 20,
  },
  amountText: {
    fontSize: 20,
    fontWeight: '600',
  },
  addressContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
  },
  deliveryIcon: {
    height: 45,
    width: 45,
    marginHorizontal: 10,
  },
  addressTextContainer: {
    width: width - 75,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  addressText: {
    fontSize: 16,
    color: 'rgb(102, 102, 102)',
  },
  paymentOptions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    height: 110,
    width: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'rgb(234, 234, 234)',
    borderRadius: 10,
    borderColor: 'rgb(234, 234, 234)',
    borderWidth: 1,
    shadowColor: 'rgb(23, 23, 23)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cashIcon: {
    fontSize: 38,
    color: 'rgb(107, 128, 104)',
  },
  creditCardIcon: {
    fontSize: 38,
    color: 'rgb(26, 31, 113)',
  },
  btcIcon: {
    fontSize: 38,
    color:'rgb(247,147,26)',
  },
  iconText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(84, 82, 82)',
  }
});
