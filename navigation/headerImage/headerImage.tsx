import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { styles } from './styles.main'

export type Props = {
  size: number
  image: string
}

export const HeaderImage: FC<Props> = ({ size, image }) => {
  return (
    <View style={[styles.imageContainer, { width: size, height: size }]}>
      <View style={styles.imageCircle}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </View>
  )
}
