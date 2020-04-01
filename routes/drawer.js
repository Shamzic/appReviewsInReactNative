
import React from 'react'
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// import About from '../screens/about'
// import Home from '../screens/home'

import AboutStack from './aboutStack'
import HomeStack from './homeStack'

const Drawer = createDrawerNavigator();

export default RootDrawerNavigator = () => {
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}