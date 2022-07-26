import React, { FC } from 'react'
import { Image, ScrollView, Text, View, Platform } from 'react-native'
import { HeaderImage } from '../../navigation/headerImage/headerImage'
import { styles } from './styles.main'
import { PostTable } from '../Newsfeed/Newsfeed'

type Props = {
  route: {
    params: {
      item: PostTable
    }
  }
}

export const SinglePost: FC<Props> = ({ route }) => {
  const name = route?.params?.item.name
  const photo = route?.params?.item.photo
  const postContext = route?.params?.item.post

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.singlePostBox}
        contentContainerStyle={Platform.OS === 'web' && { flex: 1 }}
      >
        <View style={styles.userPostContainer}>
          <HeaderImage
            size={50}
            image={'https://xsgames.co/randomusers/avatar.php?g=male'}
          />
          <Text style={styles.userPostText}>{name}</Text>
        </View>
        {photo && (
          <View style={styles.photoContainer}>
            <Image
              style={styles.photo}
              source={{ uri: 'https://picsum.photos/300/200?random=1' }}
            />
          </View>
        )}
        <View style={styles.postContextContainer}>
          <Text style={styles.postContextText}>{postContext}</Text>
        </View>
      </ScrollView>
    </View>
  )
}
