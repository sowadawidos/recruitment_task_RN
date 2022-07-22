import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles.main'
import { NewsfeedPost } from '../NewsfeedPost/NewsfeedPost'

export const PostView = ({
  postTable,
  fetchPosts,
  refreshing,
  onEndReached,
}) => {
  const renderPost = ({ item }) => {
    return <NewsfeedPost item={item} />
  }

  return (
    <View style={styles.postContainer}>
      <FlatList
        data={postTable}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReached}
        onRefresh={fetchPosts}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}
