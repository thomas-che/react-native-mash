import React, {useEffect, useState} from 'react';
import { Alert, AsyncStorage, Pressable, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';


export default function Map ({navigation, route}) {

    const {titre} = route.params;

    return (
        <View style={styles.body}>
            <Text style={[GlobalStyle.CustomFont, styles.text]}>
                {titre}
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
});
