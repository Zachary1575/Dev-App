import React from 'react';



import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from './navigation/tabs';

//import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
		<Stack.Navigator screenOptions ={{headerShown: false}} initialRouteName={"Home"}>
			<Stack.Screen name="Hme_Screen" component={Tabs} />
			
		</Stack.Navigator>
    </NavigationContainer>


  );
}



