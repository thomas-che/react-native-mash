import react from "react";
import { StyleSheet, Text, View } from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                Tuto React Native
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00f'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Header;