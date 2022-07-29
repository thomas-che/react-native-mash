import React, {useEffect, useState} from 'react';
import { Alert, AsyncStorage, Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import CustomButton from '../components/CustomButton';

export default function Home ({navigation, route}) {

    const onPressHandler = () => {
        navigation.navigate('Login', {ItemName: 'Item from Home', ItemId: 12})
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if(value != null){
                        let user = JSON.parse(value)
                        setName(user.pseudo)
                        setAge(user.age)
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    
    const updateData = async () => {
        if(name.length == 0) {
            Alert.alert('Attention', 'Le pseudo doit ne doit pas être vide')
        } else {
            try {
                var user = {pseudo: name}
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('Réussite', 'Login changé');
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('UserName');
            navigation.navigate('Login')
        } catch (error) {
            console.log(error);
        }        
    }

    return (
        <View style={styles.body}>
            <Text style={[GlobalStyle.CustomFont, styles.text]}>
                Hello {name}, age = {age}
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Login page
                </Text>
            </Pressable>
            <TextInput 
                style={styles.textInput}
                value={name}
                onChangeText={(value)=>setName(value)}
            />
            <CustomButton 
                title='Update'
                color='#fff'
                style={styles.customButton}
                onPressFunction={updateData}
            />
            <CustomButton 
                title='Remove'
                color='#000'
                style={styles.customButton}
                onPressFunction={removeData}
            />
            <Text style={styles.text}>
                {route.params?.Message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
        fontFamily: 'SquarePeg-Regular'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        width: 150,
        padding: 10,
        alignItems: 'center',
        backgroundColor: "#a1f"
    },
    textInput: {
        textAlign: 'center',
        borderColor: '#333',
        borderWidth: 1,
        width: 250,
        borderRadius: 6,
        paddingLeft: 10,
        paddingRight: 10,
    },
});
