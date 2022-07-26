import React, { FC, useEffect, useState } from 'react'
import { styles } from './style.main'
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { sortTableData, TableData } from '../../constans/sortTableData'

type Props = {
  getTableView: (id: string) => void
}

export const SortTable: FC<Props> = ({ getTableView }) => {
  const [selectedId, setSelectedId] = useState<string>('0')

  const renderChips: ListRenderItem<TableData> = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#4FCBC2' : 'transparent'
    const borderColor = item.id === selectedId ? '#4FCBC2' : '#7B7B7B'
    const textColor = item.id === selectedId ? '#FFFFFF' : '#7B7B7B'

    return (
      <View style={styles.chipsContainer}>
        <TouchableOpacity
          style={[
            styles.chipsButtons,
            { backgroundColor: backgroundColor, borderColor: borderColor },
          ]}
          onPress={() => setSelectedId(item.id)}
        >
          <Text style={[styles.chipsText, { color: textColor }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  useEffect(() => {
    getTableView(selectedId)
  }, [selectedId])

  return (
    <View style={styles.sortTableContainer}>
      <FlatList
        data={sortTableData}
        renderItem={renderChips}
        keyExtractor={(item: TableData) => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </View>
  )
}
