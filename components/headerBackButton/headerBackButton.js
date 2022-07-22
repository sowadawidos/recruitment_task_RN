import React from 'react'
import { View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const HeaderBackButton = ({ navigation }) => {
  return (
    <View style={{ marginLeft: 20 }}>
      <Ionicons
        name="arrow-back-outline"
        size={25}
        color={'#28235F'}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
