import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>  Hi ! </Text>
      <Button title='Press Me' onPress={() => Linking.openURL('https://youtu.be/dQw4w9WgXcQ')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#00f',
    flex: 1,
    alignItems : 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});
