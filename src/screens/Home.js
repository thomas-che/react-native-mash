import React, {useEffect, useState} from 'react';
import { Alert, AsyncStorage, Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import CustomButton from '../components/CustomButton';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, increaseAge } from '../redux/action';

const db = SQLite.openDatabase(
    {
        name:'MainDB',
        location:'default'
    },
    () => {},
    error => {console.log('ERROR openDatabase'+error)}
);

export default function Home ({navigation, route}) {

    const onPressHandler = () => {
        navigation.navigate('Login', {ItemName: 'Item from Home', ItemId: 12})
    }

    const {name, age} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();

    const getData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users ORDER BY ID DESC",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if(0<len){
                            var userName = results.rows.item(0).Name;
                            var userAge = results.rows.item(0).Age;
                            dispatch(setName(userName))
                            dispatch(setAge(userAge))
                        }
                    }
                )
            }, function(error) {
                console.log('Transaction ERROR: ' + error.message);
            })
        } catch (error) {
            console.log('Error getData'+error);
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
                db.transaction((tx) => {
                    tx.executeSql(
                        "UPDATE Users SET Name = ? WHERE ID=1;",
                        [name],
                        () => {Alert.alert('Success !', 'Le pseudo updated')},
                        error => {console.log('Error updateData '+error)}
                    )
                });
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "DELETE FROM Users WHERE ID=1;",
                    [],
                    () => {navigation.navigate('Login')},
                    error => {console.log('Error removeData '+error)}
                )
            });
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
                onChangeText={(value)=>dispatch(setName(value))}
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
            <CustomButton 
                title='Increase Age'
                color='#00f'
                style={styles.customButton}
                onPressFunction={()=>{dispatch(increaseAge())}}
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
