import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    marginBottom: 10,
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    marginLeft: 16,
  }, 

  addButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#E23C44',
  },

  buttonText : {
    color: '#FFF',
    fontSize: 24,
  },
});