import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {

	const [name, setName] = useState('Thomas')
	const [session, setSession] = useState({number: 6, title: 'state'})
	const [current, setCurrent] = useState(true)

	const [counter, setCounter] = useState({number: 0, click: 0})

	const onClickHandler = () => {
		setName('Changement du text :)')
		setSession({number: 7, title: 'Style'})
		setCurrent(false)
	}

	const onClickAdd = () => {
		setCounter({
			number: counter.number + 5, 
			click: counter.click + 1
		})
	}

	return (
		<View style={styles.body}>
			<Text style={styles.text}>{name}</Text>
			<Text style={styles.text}>Cette session est la numero {session.number} et traite de {session.title}</Text>
			<Text style={styles.text}>{current ? 'current session' : 'other session'}</Text>
			<Button title='Update State' onPress={onClickHandler}></Button>

			<Text style={styles.text}>{counter.number}</Text>
			<Button title='Add' onPress={onClickAdd}></Button>
			<Text style={styles.text}>Tu as cliqué {counter.click} fois</Text>
		</View>
		
	);
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#00f',
		flex: 1,
		alignItems : 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 20,
	}
});
