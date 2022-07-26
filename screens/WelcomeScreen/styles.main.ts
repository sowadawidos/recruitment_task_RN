import { Colors } from '../../constans/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.dirtyWhite,
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    maxWidth: 800,
  },
  logoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4,
  },
  buttonBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.3,
  },
  homeButton: {
    width: 250,
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: '500',
  },
  titleText: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '500',
    color: Colors.white,
  },
})
