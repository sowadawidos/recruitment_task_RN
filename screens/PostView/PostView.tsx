import React, { FC } from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'
import { styles } from './styles.main'
import { NewsfeedPost } from '../NewsfeedPost/NewsfeedPost'
import { PostTable } from '../Newsfeed/Newsfeed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

export type NewsfeedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>

export type Props = {
  postTable: PostTable[]
  refreshing: boolean
  onEndReached: () => void
  onListRefresh: () => Promise<void>
  navigation: NewsfeedScreenNavigationProp
}

export const PostView: FC<Props> = ({
  postTable,
  refreshing,
  onEndReached,
  onListRefresh,
  navigation,
}) => {
  const renderPost: ListRenderItem<PostTable> = ({ item }) => {
    return (
      <NewsfeedPost
        item={item}
        onListRefresh={onListRefresh}
        navigation={navigation}
      />
    )
  }

  return (
    <View style={styles.postContainer}>
      <FlatList
        data={postTable}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReached}
        onRefresh={onListRefresh}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}
