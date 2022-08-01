import React, {useEffect, useState} from 'react';
import { Pressable, StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/action';

const db = SQLite.openDatabase(
    {
        name:'MainDB',
        location:'default'
    },
    () => {},
    error => {console.log('ERROR openDatabase'+error)}
);

export default function Login ({navigation}) {

    const {name, age} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                +"Users "
                +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            ),
            [],
            () => {
                console.log('Create table succes');
            },
            error => {
                console.log('ERROR create table');
            }
        })
    }

    const setData = async () => {
        if(name.length == 0 || age.length == 0) {
            Alert.alert('Attention', 'Le pseudo doit ne doit pas être vide')
        } else {
            try {
                dispatch(setName(name))
                dispatch(setAge(age))
                await db.transaction( async (tx) => {
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES (?, ?);",
                        [name, age]
                    )
                })

                navigation.navigate('Home');
            } catch (error) {
                console.log('ERROR setData'+error);
            }
        }
    }

    const getData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users ORDER BY ID DESC",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if(0<len){
                            navigation.navigate('Home')
                        }
                    }
                )
            });
        } catch (error) {
            console.log('ERROR getData'+error);
        }
    }

    useEffect(() => {
        getData();
        createTable();
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
                onChangeText={(value)=>dispatch(setName(value))}
            />
            <TextInput 
                style={styles.textInput}
                placeholder='age'
                onChangeText={(value)=>dispatch(setAge(value))}
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
