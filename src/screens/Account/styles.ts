import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  header: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: 'rgba(197, 197, 197, 0.8)',
  },
  avatar: {
    fontSize: 56,
    padding: 20,
  },
  emailText: {
    fontSize: 18,
    fontWeight: '500',
  },
  contentContainer: {
    flex: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderTopColor: 'rgb(197, 197, 197)',
    borderTopWidth: 0.5,
    borderBottomColor: 'rgb(197, 197, 197)',
    borderBottomWidth: 0.5,
  },
  textCard: {
    fontSize: 16,
    fontWeight: '500',
  },
  iconCard: {
    fontSize: 40,
    color: 'rgb(197, 197, 197)',
  },
});
