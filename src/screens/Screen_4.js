import React from 'react'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView
} from 'react-native';

export default function Screen_4() {

    let [fontsLoaded] = useFonts({
        "Sans_Regular": require('../assets/fonts/SF_Pro/SFPROREGULAR.otf'),
        "Sans_Bold": require("../assets/fonts/SF_Pro/SFPROBOLD.otf"),
        "Sans_Medium": require("../assets/fonts/SF_Pro/SFPROMEDIUM.otf")
      });
    
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{flex: 1, marginLeft: 20, marginTop: 10, justifyContent: "center"}}>
                    <Text style={{ fontFamily: "Sans_Bold", fontSize: 40, color: "white", marginBottom: 40}}>Content 3</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1f1f23"
    },
  });