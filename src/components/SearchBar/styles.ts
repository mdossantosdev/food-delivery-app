import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: 20,
    paddingHorizontal: 10,
    borderColor: 'rgb(229, 229, 229)',
    borderWidth: 1,
    shadowColor: 'rgb(23, 23, 23)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  searchIcon: {
    fontSize: 28,
    color: 'rgb(143, 143, 143)',
  },
  textInput: {
    flex: 1,
    height: 35,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16,
  },
});
