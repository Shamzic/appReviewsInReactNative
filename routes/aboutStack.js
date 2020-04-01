
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about'

const Stack = createStackNavigator()

export default AboutStack = () => {
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
            name='About' 
            component={About} 
            options={{ title: 'About Gamezone',
            }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}
