import React, { useEffect } from 'react'
import { WelcomeScreen } from './screens/WelcomeScreen/WelcomeScreen.js'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabNavigator } from './navigation/mainTabNavigator'
import { loadFontsAsync } from './utils/loadFonts'
import { PostTable } from './screens/Newsfeed/Newsfeed'

export type RootStackParamList = {
  WelcomeScreen: undefined
  Home: undefined
  PostView: undefined
  AddPost: {
    postTitle: string
    post: string
  }
  NewsfeedPost: undefined
  HeaderBackButton: undefined
  PostButton: undefined
  Newsfeed: undefined
  SinglePost: { item: PostTable } | undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  useEffect(() => {
    loadFontsAsync()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
            headerBackTitle: '',
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
