import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Newsfeed } from '../screens/Newsfeed/Newsfeed'
import { View } from 'react-native'
import { HeaderImage } from './headerImage/headerImage'
import { HeaderBackButton } from './headerBackButton/headerBackButton'
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AddPost } from '../screens/addPost/AddPost'
import { AddPostButton } from './addPostButton/addPostButton'
import { SinglePost } from '../screens/SinglePost/SinglePost'
import { Colors } from '../constans/Colors'

const Stack = createStackNavigator()

export function NewsfeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Newsfeed"
        component={Newsfeed}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.dirtyWhite,
            shadowColor: 'transparent',
            elevation: 0,
            height: 100,
          },
          headerTintColor: Colors.darkblue,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 16,
            fontFamily: 'opensans-bold',
          },
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={Colors.darkblue}
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
        name="SinglePost"
        component={SinglePost}
        options={({ navigation, route }) => ({
          title: `${route?.params?.item.postTitle}`,
          headerStyle: {
            backgroundColor: Colors.dirtyWhite,
            shadowColor: 'transparent',
            elevation: 0,
            height: 100,
          },
          headerTintColor: Colors.darkblue,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 16,
            fontFamily: 'opensans-bold',
          },
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="NewPost"
        component={AddPost}
        options={({ navigation }) => ({
          title: 'Nowy post',
          headerStyle: {
            backgroundColor: Colors.dirtyWhite,
            shadowColor: 'transparent',
            elevation: 0,
            height: 100,
          },
          headerTintColor: Colors.darkblue,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 16,
            fontFamily: 'opensans-bold',
          },
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <AddPostButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  )
}
