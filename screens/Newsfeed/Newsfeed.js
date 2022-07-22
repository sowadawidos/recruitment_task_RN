import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TextInput, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from './styles.main'
import { SortTable } from '../SortTable/SortTable'
import { PostView } from '../PostView/PostView'
import fetchData from '../../api'
import { SearchInput } from '../../components/searchInput/searchInput'

export const Newsfeed = () => {
  const [postTable, setPostTable] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [numberOfPosts, setNumberOfPosts] = useState(10)
  const [tableView, setTableView] = useState(0)

  const getTableView = (id) => {
    setTableView(id)
  }

  async function fetchPosts() {
    setRefreshing(true)

    try {
      const response = await fetchData('get', null, '', {
        'content-type': 'application/json',
      })

      if (!response.data) throw Error

      setTimeout(() => {
        setRefreshing(false)
        postToDisplay(numberOfPosts, response.data)
      }, 500)
    } catch {
      setTimeout(() => {
        setRefreshing(false)
      }, 500)
    }
  }

  const postToDisplay = (number, data) => {
    const filteredArray = data.slice(0, number)
    setPostTable(filteredArray)
  }

  const onEndReached = async () => {
    setNumberOfPosts((prev) => prev + 10)
    await fetchPosts()
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.searchInputBox}>
          <SearchInput />
        </View>
        <SortTable getTableView={getTableView} />
        {tableView === 0 && (
          <PostView
            postTable={postTable}
            fetchPosts={fetchPosts}
            refreshing={refreshing}
            onEndReached={onEndReached}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
