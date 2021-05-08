import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  navigation: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgb(0, 0, 0)',
  },
  cardContainer: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountContainer: {
    flex: 2,
    padding: 10,
    justifyContent: 'space-around',
  },
  amountInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgb(0, 0, 0)',
    marginBottom: 20,
  },
  emptyIcon: {
    fontSize: 42,
    color: 'rgb(0, 0, 0)',
  },
  ordersIcon: {
    fontSize: 34,
    color: 'rgb(41, 143, 163)',
  },
  footerContainer: {
    flex: 1,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: 'rgb(234, 234, 234)',
    borderRadius: 10,
    shadowColor: 'rgb(23, 23, 23)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: 'rgb(234, 234, 234)',
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  offerText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgb(41, 143, 163)',
  },
  offerIcon: {
    fontSize: 40,
    color: 'rgb(143, 143, 143)',
  },
});
