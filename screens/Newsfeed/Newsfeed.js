import React, { useEffect, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { styles } from './styles.main'
import { SortTable } from '../SortTable/SortTable'
import { PostView } from '../PostView/PostView'
import { SearchInput } from '../../components/searchInput/searchInput'
import { db } from '../../api/firebase'
import { collection, getDocs } from 'firebase/firestore'

export const Newsfeed = ({ navigation }) => {
  const [postTable, setPostTable] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [numberOfPosts, setNumberOfPosts] = useState(10)
  const [section, setSection] = useState('0')
  const [postToDisplayArray, setPostToDisplayArray] = useState([])

  const getTableView = (id) => {
    setSection(id)
  }

  async function fetchPosts() {
    setRefreshing(true)

    try {
      const querySnapshot = await getDocs(collection(db, 'post'))

      setTimeout(() => {
        setPostTable([])
        querySnapshot.forEach((doc) =>
          setPostTable((prev) => [...prev, { ...doc.data(), id: doc.id }])
        )

        setRefreshing(false)
      }, 500)
    } catch (e) {
      setTimeout(() => {
        console.log(`Error ${e}`)
        setRefreshing(false)
      }, 500)
    }
  }

  const postToDisplay = (number) => {
    const filteredArray = postTable.slice(0, number)
    filteredArray.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
    setPostToDisplayArray(filteredArray)
  }

  const onEndReached = () => {
    setNumberOfPosts((prev) => prev + 10)
    postToDisplay(numberOfPosts)
  }

  const onListRefresh = async () => {
    await fetchPosts()
  }

  useEffect(() => {
    postToDisplay(numberOfPosts)
  }, [postTable])

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
        {section === '0' && (
          <PostView
            postTable={postToDisplayArray}
            setPostToDisplayArray={setPostToDisplayArray}
            onListRefresh={onListRefresh}
            refreshing={refreshing}
            onEndReached={onEndReached}
            navigation={navigation}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
