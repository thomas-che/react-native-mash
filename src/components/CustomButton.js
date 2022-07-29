import react from "react";
import { StyleSheet, Text, Pressable } from 'react-native';



const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#aaa' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#fff' : '#1eb900' },
                styles.button,
                {...props.style}
            ]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
   
    text: {
        color: '#fff',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
    }
});

export default CustomButton;