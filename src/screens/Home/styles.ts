import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  addressContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  deliveryIcon: {
    height: 25,
    width: 25,
  },
  addressText: {
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  editIcon: {
    color: 'rgb(41, 143, 163)',
    fontSize: 20,
  },
  searchBarContainer: {
    flex: 4,
  },
  contentContainer: {
    flex: 5,
  },
});
