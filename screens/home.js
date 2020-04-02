import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({navigation}) {

  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {title : 'Zelda BOTW', rating : 3, body: 'Jeu d\'aventure sur Nintendo Switch', key: '1'},
    {title : 'Pokemon DJ mystère', rating : 4, body: 'Jeu d\'aventure sur Nintendo DS', key: '2'},
    {title : 'Final Fantasy III', rating : 5, body: 'Jeu tour par tour sur Nintendo DS', key: '3'},
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    // setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress= {Keyboard.dismiss}> 
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{...styles.modalToggle, ...styles.modalClose}}
            />
            <ReviewForm addReview={addReview}></ReviewForm>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

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

const styles = StyleSheet.create({
  modalContent: {

  },
  modalToggle : {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  }, 
  modalClose : {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent : {
    flex: 1,
    marginHorizontal: 20
  }
})