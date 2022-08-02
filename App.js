import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Map from './src/screens/Map';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';


export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <Provider store={Store}>
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
              options={{headerShown: false}}
            />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      );


};




const styles = StyleSheet.create({
    
});