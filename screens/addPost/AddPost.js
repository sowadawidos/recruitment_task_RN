import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles.main'
import { HeaderImage } from '../../components/headerImage/headerImage'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const AddPost = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
      <View style={{ flex: 1, maxWidth: 800, width: '100%' }}>
        <View style={styles.postTitleInputContainer}>
          <Text style={styles.postTitleText}>Dodaj tytuł:</Text>
          <TextInput
            style={styles.postTitleInput}
            placeholder="Lorem ipsum..."
            placeholderTextColor="#7B7B7B"
          />
        </View>
        <View style={styles.postContextContainer}>
          <HeaderImage
            size={50}
            image="https://xsgames.co/randomusers/avatar.php?g=female"
          />
          <TextInput
            style={styles.postContextInput}
            placeholder="Napisz coś..."
            placeholderTextColor="#7B7B7B"
          />
        </View>
        <View style={styles.postPhotoContainer}>
          <View style={styles.addPhotoContainer}>
            <Ionicons name={'image-outline'} size={25} color={'#28235F'} />
            <TouchableOpacity>
              <Text style={styles.addPhotoText}>Dodaj zdjęcie</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addedPhotoContainer}>
            <View style={styles.addedPhoto}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
                source={{ uri: 'https://picsum.photos/300/200?random=1' }}
              />
            </View>
            <View style={{ width: 80, height: 50, borderRadius: 10 }}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
                source={{ uri: 'https://picsum.photos/300/200?random=1' }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
