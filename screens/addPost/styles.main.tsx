import { Colors } from '../../constans/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  postTitleInputContainer: {
    width: '100%',
    flex: 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
    paddingHorizontal: 5,
  },
  postTitleInput: {
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
    height: 30,
    width: '70%',
    fontFamily: 'montserrat-semibold',
  },
  postTitleText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.darkblue,
    marginLeft: 30,
    fontFamily: 'montserrat-semibold',
  },
  postContextContainer: {
    width: '100%',
    flex: 0.3,
    paddingLeft: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  postContextInput: {
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
    maxHeight: 140,
    width: '80%',
    fontFamily: 'montserrat-semibold',
  },
  postPhotoContainer: {
    padding: 15,
    flex: 0.6,
  },
  addPhotoContainer: {
    paddingLeft: 18,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  addPhotoText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.darkblue,
    fontFamily: 'montserrat-semibold',
  },
  addedPhotoContainer: {
    paddingLeft: 18,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addedPhoto: {
    width: 80,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  addedPhotoImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
})
