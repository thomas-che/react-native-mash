import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Keyboard, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, ToastAndroid } from 'react-native';

export default function App() {

    const [name, setName] = useState('')
    const [submited, setSubmited] = useState(false)
   
    onPressHandler = () => {
        if( 3 < name.length ){
            setSubmited(!submited)
        }else{
            Alert.alert('Attention', 'le nom +3 char', [
                {text: 'Not', onPress: () => console.warn('Not presed')},
                {text: 'Cancel', onPress: () => console.warn('Cancel presed')},
                {text: 'OK', onPress: () => console.warn('OK presed')}
            ], {cancelable: true, onDismiss:()=>console.warn('Alert dismiss')})
            ToastAndroid.show('le nom +3 char', ToastAndroid.SHORT)
        }
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
                    style={({pressed})=>[
                        {backgroundColor: pressed? '#444': '#4f4'},
                        styles.button
                    ]}
                >
                    <Text>
                        {submited? 'Clear' : 'Submited'}    
                    </Text>
                </Pressable>
                
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
        alignItems: 'center',
      }
});

