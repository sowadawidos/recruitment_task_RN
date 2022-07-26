import React, { FC } from 'react'
import { View } from 'react-native'
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../constans/Colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

export type HeaderBackButtonNavigationProps = StackNavigationProp<
  RootStackParamList,
  'HeaderBackButton'
>

export type Props = {
  navigation: HeaderBackButtonNavigationProps
}

export const HeaderBackButton: FC<Props> = ({ navigation }) => {
  return (
    <View style={{ marginLeft: 20 }}>
      <Ionicons
        name="arrow-back-outline"
        size={25}
        color={Colors.darkblue}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
