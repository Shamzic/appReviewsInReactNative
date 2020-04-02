import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global'
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(8),
	rating: yup.string().required().test(
		'is-num-1-5', 
		'La note doit être un nombre compris entre 1 et 5',
		(val) => {
			return parseInt(val) < 6 && parseInt(val) > 0;
		}
	)
})

export default function ReviewForm({ addReview }) {
	return (
		<View>
			<Formik
				initialValues={{ title: '', body : '', rating: '' }}
				validationSchema={reviewSchema}
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
							onBlur={props.handleBlur('title')}
						/>

						<Text style={globalStyles.errorText}> {props.touched.title && props.errors.title} </Text>
						
						<TextInput 
							style={globalStyles.input}
							placeholder="Avis"
							onChangeText={props.handleChange('body')}
							value={props.values.body}
							onBlur={props.handleBlur('body')}
						/>
						
						<Text style={globalStyles.errorText}> {props.touched.body && props.errors.body} </Text>

						<TextInput 
							style={globalStyles.input}
							placeholder="Note (1 à 5)"
							onChangeText={props.handleChange('rating')}
							value={props.values.rating}
							keyboardType='numeric'
							onBlur={props.handleBlur('rating')}

						/>
						<Text style={globalStyles.errorText}> {props.touched.rating && props.errors.rating} </Text>

						<Button title="envoyer" color='maroon' onPress={props.handleSubmit}/>

					</View>
				)}
			</Formik>
		</View>
	)
		
}

const styles = StyleSheet.create({

	
})