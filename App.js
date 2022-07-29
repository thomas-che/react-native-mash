import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
              name="Home"
              component={Home}
            />
        </Stack.Navigator>
      </NavigationContainer>
      );


};




const styles = StyleSheet.create({
    
});