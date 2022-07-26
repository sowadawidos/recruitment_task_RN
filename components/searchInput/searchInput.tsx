import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './styles.main'
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons'

export const SearchInput = () => {
  return (
    <View style={styles.searchInputContainer}>
      <Ionicons name="search" size={20} color={'black'} />
      <TextInput style={styles.searchInput} />
    </View>
  )
}
