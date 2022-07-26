import { Colors } from '../../constans/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 15,
  },
  imageCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
})
