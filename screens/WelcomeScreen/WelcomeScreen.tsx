import React, { FC, useEffect, useState } from 'react'
import { SafeAreaView, Text, View, ActivityIndicator } from 'react-native'
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles.main'
import { Colors } from '../../constans/Colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

export type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>

export type Props = {
  navigation: WelcomeScreenNavigationProp
}

export const WelcomeScreen: FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(true)

  const handleNavigationToNewsfeed = () => {
    navigation.navigate('Home')
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      handleNavigationToNewsfeed()
    }, 2500)
  }, [])

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <LinearGradient
        // Button Linear Gradient
        colors={[Colors.darkblue, Colors.turquoise]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.logoBox}>
            <Icon name="heartbeat" size={90} color={Colors.white} />
            <Text style={styles.titleText}>Health Nation</Text>
          </View>
          <View style={styles.buttonBox}>
            <ActivityIndicator
              size="large"
              color={Colors.white}
              animating={loading}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
