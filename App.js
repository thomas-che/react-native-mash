import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {

	const [name, setName] = useState('Style Test')

	const onClickHandler = () => {
		setName('Style update donne')
	}

	return (
		<View style={styles.body}>
			<Text style={styles.text}>{name}</Text>
			<View style={styles.button}>
				<Button title='Update State' onPress={onClickHandler}></Button>
			</View>
		</View>
		
	);
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#ffff00',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 10,
		borderColor: '#ff00ff',
		borderRadius: 10,
	},
	text: {
		color: '#000000',
		fontSize: 35,
		fontStyle: 'italic',
		margin: 10,
		textTransform: 'uppercase'
	},
	button: {
		width: 200,
		height: 60,
	}
});

