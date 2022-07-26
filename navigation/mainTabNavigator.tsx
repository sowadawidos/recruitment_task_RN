import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Newsfeed } from '../screens/Newsfeed/Newsfeed'
import { NewsfeedStack } from './newsfeedNavigator'
import { Colors } from '../constans/Colors'

const SettingsScreen = () => {
  return (
    <View>
      <Text>SETING</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const { name } = route
          let iconName

          if (name === 'Newsfeed') iconName = 'home-outline'

          if (name === 'Settings') iconName = 'mail-outline'

          if (name === 'Invite') iconName = 'person-add-outline'

          if (name === 'Cash') iconName = 'logo-usd'

          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Ionicons name={iconName} size={25} color={'white'} />
              {focused && (
                <View
                  style={{
                    width: 3,
                    height: 3,
                    backgroundColor: 'black',
                    marginTop: 5,
                  }}
                />
              )}
            </View>
          )
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.turquoise,
          height: 60,
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Newsfeed"
        component={NewsfeedStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Invite" component={SettingsScreen} />
      <Tab.Screen name="Cash" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
