
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const Stack = createStackNavigator()

export default HomeStack = () => {
  return (
    // <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator
        screenOptions={{ 
          headerStyle: {
            backgroundColor: '#CCC',
            height: 80,
          }, 
          headerTintColor: '#555',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{ 
            title: 'GameZone',
          }}
        />
        <Stack.Screen
          name='ReviewDetails' 
          component={ReviewDetails} 
          options={{ title: 'ReviewDetails',
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}
