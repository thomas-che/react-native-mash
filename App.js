import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Keyboard } from 'react-native';

export default function App() {

    const [name, setName] = useState('')
   
	return (

            <View style={styles.body}>
                <Text style={styles.text}>
                    Entre ton nom :
                </Text>
                <TextInput style={styles.input}
                    placeholder='ton nom'
                    onChangeText={setName}
                    keyboardType='email-address'
                    onBlur={() => Keyboard.dismiss()}
                    
                />
                <Text style={styles.text}>
                    {name}
                </Text>
            </View>

	);
}

const styles = StyleSheet.create({
	body: {
		flexDirection: 'column',
		backgroundColor: '#ffffff',
        alignItems: 'center'
	  },
	  text: {
		color: '#000000',
		fontSize: 35,
		fontStyle: 'italic',
		margin: 10,
	  },
      input: {
        borderColor: '#555',
        width: 200,
        borderRadius: 5,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20
      }
});

