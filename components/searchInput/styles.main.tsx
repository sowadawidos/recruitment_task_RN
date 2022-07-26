import { StyleSheet } from 'react-native'
import { Colors } from '../../constans/Colors'

export const styles = StyleSheet.create({
  searchInputContainer: {
    width: '90%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  searchInput: {
    fontSize: 18,
    paddingHorizontal: 5,
    height: 30,
    width: '90%',
  },
})
