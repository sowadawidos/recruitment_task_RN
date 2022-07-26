import React, { FC, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles.main'
import { HeaderImage } from '../../navigation/headerImage/headerImage'
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../constans/Colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

export type AddPostNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddPost'
>

export type Props = {
  navigation: AddPostNavigationProp
}

export const AddPost: FC<Props> = ({ navigation }) => {
  const [postTitle, setPostTitle] = useState<string>('')
  const [postContext, setPostContext] = useState<string>('')

  const handleTitleInput = (value: string) => {
    setPostTitle(value)
    navigation.setParams({ postTitle: value })
  }

  const handleContextInput = (value: string) => {
    setPostContext(value)
    navigation.setParams({ post: value })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
      <View style={{ flex: 1, maxWidth: 800, width: '100%' }}>
        <View style={styles.postTitleInputContainer}>
          <Text style={styles.postTitleText}>Dodaj tytuł:</Text>
          <TextInput
            style={styles.postTitleInput}
            placeholder="Lorem ipsum..."
            placeholderTextColor={Colors.grey}
            value={postTitle}
            onChangeText={(value) => handleTitleInput(value)}
          />
        </View>
        <View style={styles.postContextContainer}>
          <HeaderImage
            size={50}
            image="https://xsgames.co/randomusers/avatar.php?g=female"
          />
          <TextInput
            multiline
            style={styles.postContextInput}
            placeholder="Napisz coś..."
            placeholderTextColor={Colors.grey}
            value={postContext}
            onChangeText={(value) => handleContextInput(value)}
          />
        </View>
        <View style={styles.postPhotoContainer}>
          <View style={styles.addPhotoContainer}>
            <Ionicons
              name={'image-outline'}
              size={25}
              color={Colors.darkblue}
            />
            <TouchableOpacity>
              <Text style={styles.addPhotoText}>Dodaj zdjęcie</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addedPhotoContainer}>
            <View style={styles.addedPhoto}>
              <Image
                style={styles.addedPhotoImage}
                source={{ uri: 'https://picsum.photos/300/200?random=1' }}
              />
            </View>
            <View style={{ width: 80, height: 50, borderRadius: 10 }}>
              <Image
                style={styles.addedPhotoImage}
                source={{ uri: 'https://picsum.photos/300/200?random=1' }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
