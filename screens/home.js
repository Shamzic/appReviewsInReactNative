import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Home({navigation}) {

  const [reviews, setReviews] = useState([
    {title : 'Zelda BOTW', rating : 5, body: 'lorem ipsum', key: '1'},
    {title : 'Pokemon DJ mystère', rating : 4, body: 'lorem ipsum', key: '2'},
    {title : 'Not so FF', rating : 6, body: 'lorem ipsum', key: '3'},
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>   
        )}
      >
      </FlatList>
    </View>
  );
}