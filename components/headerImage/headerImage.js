import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles.main'

export const HeaderImage = ({ size, image }) => {
  return (
    <View style={[styles.imageContainer, { width: size, height: size }]}>
      <View style={styles.imageCircle}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: '50%',
          }}
          source={{ uri: image }}
        />
      </View>
    </View>
  )
}
