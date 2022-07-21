import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Keyboard, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable,  } from 'react-native';
import { Alert } from 'react-native-web';

export default function App() {

    const [name, setName] = useState('')
    const [submited, setSubmited] = useState(false)
   
    onPressHandler = () => {
        setSubmited(!submited)
    }

	return (

            <View style={styles.body}>
                <Text style={styles.text}>
                    Entre ton nom :
                </Text>
                <TextInput style={styles.input}
                    placeholder='ton nom'
                    onChangeText={setName}
                />
                <Pressable                  
                    onPress={onPressHandler}
                    hitSlop={{top: 10, right: 10, bottom:10, left:10}}
                    android_ripple={{color:'#00f'}}
                    style={({pressed})=>[
                        {backgroundColor: pressed? '#444': '#4f4'},
                    ]}
                >
                    <Text>
                        {submited? 'Clear' : 'Submited'}    
                    </Text>
                </Pressable>
                <TouchableWithoutFeedback
                    onPress={onPressHandler}
                >
                    <Text>
                        {submited? 'Clear' : 'Submited'}    
                    </Text>
                </TouchableWithoutFeedback>
                <TouchableHighlight
                    onPress={onPressHandler}
                    style={styles.button}
                    underlayColor='#f00'
                >
                    <Text>
                        {submited? 'Clear' : 'Submited'}    
                    </Text>
                </TouchableHighlight>
                <TouchableOpacity
                    onPress={onPressHandler}
                    style={styles.button}
                >
                    <Text>
                        {submited? 'Clear' : 'Submited'}    
                    </Text>
                </TouchableOpacity>
                <Button 
                    onPress={onPressHandler}
                    title={submited? 'Clear' : 'Submited'}
                    color='#0ff'
                />
                { submited ? 
                    <Text style={styles.text}>
                        {name}
                    </Text>
                    :
                    null
                }
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
      },
      button: {
        padding: 10,
        margin: 10,
        backgroundColor: "#0f0",
        alignItems: 'center',
      }
});

