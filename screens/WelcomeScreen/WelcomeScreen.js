import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles.main'

export const WelcomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true)

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
        colors={['#28235F', '#4FCBC2']}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.logoBox}>
            <Icon name="heartbeat" size={90} color="white" />
            <Text style={styles.titleText}>Health Nation</Text>
          </View>
          <View style={styles.buttonBox}>
            <ActivityIndicator size="large" color="white" animating={loading} />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
