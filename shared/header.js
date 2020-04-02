import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header({navigation, title}) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <ImageBackground source={require('../assets/img/game_bg.png')}style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}></MaterialIcons>
      <View style={styles.headerTitle}>
        <Image source={require('../assets/img/heart_logo.png')} style={styles.headerImage}/>
        <Text style={styles.headerText}>{ title }</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header : {
    flex: 1,
    width:Dimensions.get('screen').width,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD'
  },
  headerText: {
    fontWeight : 'bold',
    fontSize: 20,
    color: '#444',
    letterSpacing: 1,
  },
  icon : {
    position: 'absolute',
    left: 16,
  },
  headerImage : {
    width: 26,
    height: 26,
    marginHorizontal : 10
  },
  headerTitle: {
    flexDirection: 'row',
  }
});