import { Colors } from '../../constans/Colors'

export const styles = {
  newsfeedPostContainer: {
    paddingHorizontal: 18,
    marginBottom: 25,
  },
  userPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostText: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.darkblue,
    fontFamily: 'montserrat-semibold',
  },
  userPostHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  userPostHeaderText: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 14,
    color: Colors.darkblue,
    fontFamily: 'montserrat-semibold',
  },
  userPostContentText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    width: '80%',
    fontFamily: 'montserrat-medium',
    color: Colors.grey,
  },
  userPostContentMoreButton: {
    alignSelf: 'flex-end',
  },
  userPostContentMoreButtonText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    color: Colors.turquoise,
    fontFamily: 'montserrat-semibold',
  },
  userPostContentTimePostedText: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.grey,
    fontFamily: 'montserrat-medium',
  },
  photoContainer: {
    width: '100%',
    height: 215,
    marginTop: 12,
    marginBottom: 5,
    alignSelf: 'center',
    borderRadius: 15,
  },
  photoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
}
