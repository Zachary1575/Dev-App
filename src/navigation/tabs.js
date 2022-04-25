import React from 'react';

import  {View, Image, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({focused}) => (
                <Image>
                    

                </Image>
            )}} />
        </Tab.Navigator>
    )
} 

export default Tabs;