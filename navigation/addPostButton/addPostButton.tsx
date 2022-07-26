import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../api/firebase'
import moment from 'moment'
import { Colors } from '../../constans/Colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

export type AddPostNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AddPost'
>

export type Props = {
  navigation: AddPostNavigationProps
}

type PostBodyType = {
  postTitle: string
  post: string
}

export const AddPostButton: FC<Props> = ({ navigation }) => {
  const postBody: PostBodyType | any = navigation.getState()?.routes[1]?.params

  const payload = {
    ...postBody,
    name: 'Jan Kowalski',
    post: postBody?.post,
    createdAt: {
      seconds: moment().unix(),
    },
    liked: false,
    photo: true,
  }

  const handlePostAction = async () => {
    try {
      await addDoc(collection(db, 'post'), { ...payload })
      navigation.navigate('Newsfeed')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <TouchableOpacity
      style={{
        marginRight: 25,
      }}
      onPress={handlePostAction}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: '600',
          color: Colors.darkblue,
          fontFamily: 'montserrat-semibold',
        }}
      >
        Dodaj
      </Text>
    </TouchableOpacity>
  )
}
