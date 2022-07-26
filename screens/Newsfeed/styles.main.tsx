import { Colors } from '../../constans/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.dirtyWhite,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    maxWidth: 800,
    width: '100%',
  },
  searchInputBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
})
