import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//import Tabs from './navigation/tabs';
import Home from './screens/Home';

//import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
		<Stack.Navigator screenOptions ={{headerShown: false}} initialRouteName={"Home"}>
			<Stack.Screen name="Home" component={Home} />
			
		</Stack.Navigator>
    </NavigationContainer>
  );
}



