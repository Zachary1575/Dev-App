import React from 'react';

import  {View, Image, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Home_Screen from '../screens/Home';
import Screen_2 from '../screens/Screen_2';
import Screen_3 from '../screens/Screen_3';
import Screen_4 from '../screens/Screen_4';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator 
        screenOptions={{headerShown: false,
                        tabBarStyle: {
                            position: "absolute",
                            backgroundColor: "#1f1f23"
                        },
                        
                        }}

        
        >
            <Tab.Screen 
                name="Home" 
                component={Home_Screen} 
                options={{tabBarIcon: ({focused}) => (
                <FontAwesome5 name="home" size={24} color={focused ? "pink" : "white"} />
            )}} />

            <Tab.Screen 
                name="SCR_2" 
                component={Screen_2} 
                options={{tabBarIcon: ({focused}) => (
                    <FontAwesome5 name="location-arrow" size={24} color={focused ? "pink" : "white"} />
            )}} />

            <Tab.Screen 
                name="SCR_3" 
                component={Screen_3} 
                options={{tabBarIcon: ({focused}) => (
                    <FontAwesome5 name="bell" size={24} color={focused ? "pink" : "white"} />
            )}} />

            <Tab.Screen 
                name="SCR_4" 
                component={Screen_4} 
                options={{tabBarIcon: ({focused}) => (
                    <FontAwesome5 name="buffer" size={24} color={focused ? "pink" : "white"}  />
            )}} />


        </Tab.Navigator>
    )
} 

export default Tabs;