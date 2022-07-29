import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenA from './src/components/ScreenA';
import ScreenB from './src/components/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Screen_A"
              component={ScreenA}
            />
          <Stack.Screen
            name="Screen_B"
            component={ScreenB}
          />
        </Stack.Navigator>
      </NavigationContainer>
      );


};




const styles = StyleSheet.create({
    
});