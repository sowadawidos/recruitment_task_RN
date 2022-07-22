import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Newsfeed } from '../screens/Newsfeed/Newsfeed'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderImage } from '../components/headerImage/headerImage'
import { HeaderBackButton } from '../components/headerBackButton/headerBackButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AddPost } from '../screens/addPost/AddPost'

const Stack = createStackNavigator()

export function NewsfeedStack() {
  const NewPost = () => {
    return <Text>HEHSZKI</Text>
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Newsfeed"
        component={Newsfeed}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#F2F2F2',
            shadowColor: 'transparent',
            elevation: 0,
            height: 100,
          },
          headerTintColor: '#28235F',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 16,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={'#28235F'}
                onPress={() => navigation.navigate('NewPost')}
              />
            </View>
          ),
          headerRight: () => (
            <HeaderImage
              size={50}
              image={'https://xsgames.co/randomusers/avatar.php?g=female'}
            />
          ),
        })}
      />
      <Stack.Screen
        name="NewPost"
        component={AddPost}
        options={({ navigation }) => ({
          title: 'Nowy post',
          headerStyle: {
            backgroundColor: '#F2F2F2',
            shadowColor: 'transparent',
            elevation: 0,
            height: 100,
          },
          headerTintColor: '#28235F',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 16,
          },
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#28235F',
                }}
              >
                Dodaj
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  )
}
