import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
