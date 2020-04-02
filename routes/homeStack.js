
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'


const Stack = createStackNavigator()

export default HomeStack = () => {
  return (
    // <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator
        screenOptions={{ 
          headerStyle: {
            height: 80,
          }, 
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={({navigation}) => {
            return  {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />,
            }
          }}
        />
        <Stack.Screen
          name='ReviewDetails' 
          component={ReviewDetails} 
          options={{ title: 'Revue détaillée',
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}
