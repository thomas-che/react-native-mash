import React, {useEffect, useState} from 'react';
import { Pressable, StyleSheet, Text, View, Image, TextInput, Alert, AsyncStorage } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function ScreenA ({navigation}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const setData = async () => {
        if(name.length == 0 || age.length == 0) {
            Alert.alert('Attention', 'Le pseudo doit ne doit pas être vide')
        } else {
            try {
                var user = {
                    pseudo: name,
                    age: age
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if(value != null){
                        navigation.navigate('Home')
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')}
            />
            <TextInput 
                style={styles.textInput}
                placeholder='pseudo'
                onChangeText={(value)=>setName(value)}
            />
            <TextInput 
                style={styles.textInput}
                placeholder='age'
                onChangeText={(value)=>setAge(value)}
            />
            <CustomButton 
                title='Login'
                color='#fff'
                style={styles.customButton}
                onPressFunction={setData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
       width: 100,
       height: 100,
       margin: 20 
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
    customButton: {
        marginTop: 20,
        borderRadius: 6,
    }
});
