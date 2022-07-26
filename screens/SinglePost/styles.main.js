import { Colors } from '../../constans/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    singlePostBox: {
        flex: 1,
        marginHorizontal: 20,
        maxWidth: 800,
    },
    userPostContainer: {
        marginTop: 15,
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    photoContainer: {
        height: 215,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15,
    },
    userPostText: {
        fontWeight: '600',
        fontSize: 14,
        color: Colors.darkblue,
        fontFamily: 'montserrat-semibold',
    },
    postContextContainer: {
        marginBottom: 15,
    },
    postContextText: {
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 17,
        color: Colors.darkblue,
        fontFamily: 'montserrat',
    },
})
