import React, { FC, useState } from 'react'
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { HeaderImage } from '../../navigation/headerImage/headerImage'
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from './styles.main'
import moment from 'moment'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../api/firebase'
import { PostTable } from '../Newsfeed/Newsfeed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

export type NewsfeedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>

export type Props = {
  item: PostTable
  onListRefresh: () => Promise<void>
  navigation: NewsfeedScreenNavigationProp
}

export const NewsfeedPost: FC<Props> = ({
  item,
  onListRefresh,
  navigation,
}) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  const postedDate = moment(item.createdAt.seconds * 1000)
    .locale('pl')
    .fromNow()

  const handleLike = async () => {
    setIsRefreshing(true)
    try {
      const payload = {
        ...item,
        liked: !item.liked,
      }

      await setDoc(doc(db, 'post', `${item.id}`), {
        ...payload,
      })
      onListRefresh()
      setIsRefreshing(true)
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }

  return (
    <View style={styles.newsfeedPostContainer}>
      <View style={styles.userPostContainer}>
        <HeaderImage
          size={45}
          image={'https://xsgames.co/randomusers/avatar.php?g=male'}
        />
        <Text style={styles.userPostText}>{item.name}</Text>
      </View>
      {item.photo && (
        <View style={styles.photoContainer}>
          <Image
            style={styles.photoImage}
            source={{ uri: 'https://picsum.photos/300/200?random=1' }}
          />
        </View>
      )}
      <View>
        <View style={styles.userPostHeaderContainer}>
          <Text style={styles.userPostHeaderText}>{item.postTitle}</Text>
          {isRefreshing ? (
            <>
              <View style={{ margin: 6 }}>
                <ActivityIndicator size={'small'} color={'black'} />
              </View>
            </>
          ) : (
            <Ionicons
              name="heart"
              size={30}
              color={item.liked ? 'red' : 'black'}
              onPress={handleLike}
            />
          )}
        </View>
        <View>
          <Text style={styles.userPostContentText} numberOfLines={2}>
            {item.post}
          </Text>
          <TouchableOpacity style={styles.userPostContentMoreButton}>
            <Text
              style={styles.userPostContentMoreButtonText}
              onPress={() => navigation.navigate('SinglePost', { item })}
            >
              Więcej
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.userPostContentTimePostedText}>{postedDate}</Text>
        </View>
      </View>
    </View>
  )
}
