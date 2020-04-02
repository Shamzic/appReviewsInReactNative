import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

export default function Home({navigation}) {

  const [reviews, setReviews] = useState([
    {title : 'Zelda BOTW', rating : 3, body: 'Jeu d\'aventure sur Nintendo Switch', key: '1'},
    {title : 'Pokemon DJ mystère', rating : 4, body: 'Jeu d\'aventure sur Nintendo DS', key: '2'},
    {title : 'Final Fantasy III', rating : 5, body: 'Jeu tour par tour sur Nintendo DS', key: '3'},
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>   
        )}
      >
      </FlatList>
    </View>
  );
}