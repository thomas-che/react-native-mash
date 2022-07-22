import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenA from './src/components/ScreenA';
import ScreenB from './src/components/ScreenB';




export default function App() {

    const Stack = createStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: () => null 
                }}
            >
                <Stack.Screen 
                    name="Screen_A"
                    component={ScreenA}    
                    options={{
                        header: () => null
                    }}            
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