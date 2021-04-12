import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  headerContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  orderText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'rgb(143, 143, 143)',
    marginBottom: 8,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 18,
    fontWeight: '500'
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: 'rgb(197, 197, 197)',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});
