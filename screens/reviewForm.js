import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global'
import { Formik } from 'formik';


export default function ReviewForm({ addReview }) {
	return (
		<View>
			<Formik
				initialValues={{ title: '', body : '', rating: '' }}
				onSubmit={(values, actions) => {
					actions.resetForm();
					addReview(values);
				}}
			>
				{(props) => (
					<View>
						<TextInput 
							style={globalStyles.input}
							placeholder="Titre de la review"
							onChangeText={props.handleChange('title')}
							value={props.values.title}
						/>
						
						<TextInput 
							style={globalStyles.input}
							placeholder="Avis"
							onChangeText={props.handleChange('body')}
							value={props.values.body}
						/>
						
						<TextInput 
							style={globalStyles.input}
							placeholder="Note (1 à 5)"
							onChangeText={props.handleChange('rating')}
							value={props.values.rating}
							keyboardType='numeric'
						/>

						<Button title="envoyer" color='maroon' onPress={props.handleSubmit}/>

					</View>
				)}
			</Formik>
		</View>
	)
		
}

const styles = StyleSheet.create({

})