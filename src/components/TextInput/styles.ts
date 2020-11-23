import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: width / 1.2,
    borderRadius: 25,
    backgroundColor: 'rgb(219, 219, 219)',
    paddingHorizontal: 20,
    marginVertical: 15,
    shadowColor: 'rgb(23, 23, 23)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color:'rgb(0, 0, 0)',
  },
  otpInput: {
    flex: 1,
    fontSize: 25,
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
  },
});
