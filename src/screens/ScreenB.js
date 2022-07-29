import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ScreenB ({navigation, route}) {

    const {ItemName, ItemId} = route.params;

    const onPressHandler = () => {
        //navigation.goBack()
        navigation.navigate('Screen_A', {Message: 'AAKGAKIGDAKIUA'})
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen B
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Retour
                </Text>
            </Pressable>
            <Text style={styles.text}>
                {ItemName}
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
        fontWeight: 'bold',
    }
});
