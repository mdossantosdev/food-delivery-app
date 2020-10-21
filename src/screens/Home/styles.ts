import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)'
  },
  header: {
    flex: 1.5,
  },
  addressContainer: {
    flex: 5,
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
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 10.5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgb(41, 143, 163)',
    marginLeft: 15,
  },
});
