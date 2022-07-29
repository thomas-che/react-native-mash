import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ScreenA ({navigation, route}) {

    const onPressHandler = () => {
        navigation.navigate('Screen_B', {ItemName: 'Item from Screen_A', ItemId: 12})
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen A
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Aller au Screen B
                </Text>
            </Pressable>
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
    }
});
