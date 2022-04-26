import React from "react";

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

import img_1 from '../assets/images/1.jpg'
import img_2 from '../assets/images/2.jpg'
import img_3 from '../assets/images/3.jpg'
import img_4 from '../assets/images/4.jpg'

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,

} from 'react-native';

const data = [
    {
    id: 1,
    name: "The Bronx",
    rating: 5,
    activity: "High",
    photo: img_1
    },

    {
    id: 2,
    name: "Flats",
    rating: 3,
    activity: "Low",
    photo: img_2
    },

    {
        id: 3,
        name: "Oof Club",
        rating: 4,
        activity: "Mid",
        photo: img_3
    },

    {
        id: 4,
        name: "Your Mom",
        rating: 1000,
        activity: "Ez",
        photo: img_4
    },
]



export default function Home() {

    let [fontsLoaded] = useFonts({
        "Sans_Regular": require('../assets/fonts/SF_Pro/SFPROREGULAR.otf'),
        "Sans_Bold": require("../assets/fonts/SF_Pro/SFPROBOLD.otf"),
        "Sans_Medium": require("../assets/fonts/SF_Pro/SFPROMEDIUM.otf")
      });
    
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    //Search bar Function
    function SearchBar() {
        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginBottom: 30
                    }}>

                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    //onChangeText={this.handleSearch}
                    placeholder='Search'
                    style={{
                            borderRadius: 10,
                            borderColor: '#333',
                            backgroundColor: '#fff'
                        }}
                    textStyle={{ color: '#000' }}
                />
            </View>
        );
    }

    // RenderList() for FlatList, all Card views
    function RenderList() {
        const renderItem = ({ item }) => (

            <TouchableOpacity
            style={{ marginBottom: 25}}>
                <View>
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: 30,
                            
                        }}
                    />

                    <View
                    style={{position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: 150,
                            backgroundColor: "#2b2d3d",
                            borderTopRightRadius: 30,
                            borderBottomLeftRadius: 30,
                            alignItems: "center",
                            justifyContent: "center"
                            }}>
                                <Text style={{fontFamily: "Sans_Bold", color: "#FBFAF5"}}>{item.name}</Text>

                                <View style={{display: "flex", flexDirection: "row"}}>
                                    <Entypo name="drink" size={15} color="#FBFAF5" />
                                    <Text style={{fontFamily: "Sans_Regular", color: "#818392", marginRight: 10, marginLeft: 1}}>{item.activity}</Text>
                                    <Entypo name="star" size={15} color="#FBFAF5" />
                                    <Text style={{marginLeft: 2, fontFamily: "Sans_Regular", color: "#818392"}}>{item.rating}</Text>
                                </View>
                                
                    </View>
                    
                </View>
            </TouchableOpacity>
        )
            
        


        /* MAIN RETURN FUNCTION */
        return (
            <FlatList
            ListHeaderComponent={
                <View style={{flex: 1, marginLeft: 10, marginTop: 10, justifyContent: "center"}}>
                    <Text style={{ fontFamily: "Sans_Bold", fontSize: 40, color: "white", marginBottom: 40}}>Hello Aiden!</Text>
                    {SearchBar()}
                </View>
                }

            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingBottom: 30,
                paddingHorizontal: 20,
                marginTop: 10
            }}
            >

            </FlatList>
        );
    }

    return (

        <SafeAreaView style={styles.container} >
            {RenderList()}
            
            
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1f1f23"
    },

  });
