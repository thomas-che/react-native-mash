import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenA from './src/components/ScreenA';
import ScreenB from './src/components/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



export default function App() {

    //const Tab = createBottomTabNavigator();
    //const TabM = createMaterialBottomTabNavigator();
    const TabT = createMaterialTopTabNavigator();
    
    return (
        <NavigationContainer>
            {/* <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon: ({focused, size, color}) => {
                        let iconName;
                        if(route.name === "Screen_A"){
                            iconName = 'adn'
                            size = focused ? 25 : 20
                        } else if (route.name === "Screen_B"){
                            iconName = 'btc';
                            size = focused ? 25 : 20;
                        }
                        return(
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    tabBarActiveTintColor: '#f00',
                    tabBarInactiveTintColor: '#333',
                    tabBarActiveBackgroundColor: '#fff',
                    tabBarInactiveBackgroundColor: '#999',
                    tabBarShowLabel: false,
                    tabBarLabelStyle: {}
                })}
            >
                <Tab.Screen 
                    name="Screen_A"
                    component={ScreenA}    
                    options={{
                        header: () => null,
                        tabBarBadge :3
                    }}            
                />
                <Tab.Screen 
                    name="Screen_B"
                    component={ScreenB}                
                />
            </Tab.Navigator> */}
            {/* <TabM.Navigator
                screenOptions={({route})=>({
                    tabBarIcon: ({focused, size, color}) => {
                        let iconName;
                        if(route.name === "Screen_A"){
                            iconName = 'adn'
                            size = focused ? 25 : 20
                        } else if (route.name === "Screen_B"){
                            iconName = 'btc';
                            size = focused ? 25 : 20;
                        }
                        return(
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },

                    tabBarInactiveTintColor: '#333',
                    tabBarActiveBackgroundColor: '#fff',
                    tabBarInactiveBackgroundColor: '#999',
                    tabBarShowLabel: false,
                    tabBarLabelStyle: {}
                })}
                activeColor='#f00'
                barStyle={{ backgroundColor: '#ff0', padding: 0 }}
                labeled={false}
            >
                <TabM.Screen 
                    name="Screen_A"
                    component={ScreenA}    
                    options={{
                        header: () => null,
                        tabBarBadge :3
                    }}            
                />
                <TabM.Screen 
                    name="Screen_B"
                    component={ScreenB}                
                />
            </TabM.Navigator> */}
            <TabT.Navigator
                initialRouteName="Screen_A"
                screenOptions={({route})=>({
                    tabBarIcon: ({focused, size, color}) => {
                        let iconName;
                        if(route.name === "Screen_A"){
                            iconName = 'adn'
                            size = focused ? 25 : 20
                        } else if (route.name === "Screen_B"){
                            iconName = 'btc';
                            size = focused ? 25 : 20;
                        }
                        return(
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: 'powderblue' },
                })}
                activeColor='#f00'
                barStyle={{ backgroundColor: '#ff0', padding: 0 }}
                labeled={false}
            >
                <TabT.Screen 
                    name="Screen_A"
                    component={ScreenA}    
                    options={{
                        header: () => null,
                    }}            
                />
                <TabT.Screen 
                    name="Screen_B"
                    component={ScreenB}                
                />
            </TabT.Navigator>
        </NavigationContainer>
    );
};




const styles = StyleSheet.create({
    
});