import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { HeaderImage } from '../../components/headerImage/headerImage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from './styles.main'
import moment from 'moment'

export const NewsfeedPost = ({ item }) => {
  const postedDate = moment(item.createdAt)
    .locale('pl')
    .startOf('hour')
    .fromNow()

  return (
    <View style={styles.newsfeedPostContainer}>
      <View style={styles.userPostContainer}>
        <HeaderImage
          size={45}
          image={'https://xsgames.co/randomusers/avatar.php?g=male'}
        />
        <Text style={styles.userPostText}>{item.profile.name}</Text>
      </View>
      {item.photo && (
        <View
          style={{
            width: '100%',
            height: 215,
            marginTop: 12,
            marginBottom: 5,
            alignSelf: 'center',
            borderRadius: 15,
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 15,
            }}
            source={{ uri: 'https://picsum.photos/300/200?random=1' }}
          />
        </View>
      )}
      <View>
        <View style={styles.userPostHeaderContainer}>
          <Text style={styles.userPostHeaderText}>{item.postTitle}</Text>
          <Ionicons
            name="heart"
            size={30}
            color={item.liked ? 'red' : 'black'}
            // onPress={() => setHasLike(!hasLike)}
          />
        </View>
        <View>
          <Text style={styles.userPostContentText}>{item.profile.post}</Text>
          <TouchableOpacity style={styles.userPostContentMoreButton}>
            <Text style={styles.userPostContentMoreButtonText}>Więcej</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.userPostContentTimePostedText}>{postedDate}</Text>
        </View>
      </View>
    </View>
  )
}
