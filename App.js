import React, { useEffect } from 'react'
import { WelcomeScreen } from './screens/WelcomeScreen/WelcomeScreen.js'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabNavigator } from './navigation/mainTabNavigator'
import { loadFontsAsync } from './utils/loadFonts'

const Stack = createNativeStackNavigator()

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
            headerBackTitle: null,
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
