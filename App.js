import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import * as Font  from 'expo-font'
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'munito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
  'munito-bold' : require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(fontLoaded) {
    return (
      <Home/>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
