import { Pressable, ScrollView, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";




const PlayingScreen = () => {
    const navigation = useNavigation();
  
    return (
    <LinearGradient colors={["black", "black"]} style={{ flex: 1 }}>
        <ImageBackground style={{ flex: 1, resizeMode: "cover", height: 781}}
            source={{
                url: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}>
            <ScrollView style={{ flex: 1, marginTop: 57 }}>
                <View style={{flexDirection:"row", justifyContent:'space-between', marginLeft: 11, marginRight:31 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                    <Feather name="chevron-down" size={30} color="white" />
                    </Pressable>
                    <Pressable style={{flexDirection:"row"}}>
                        <View style={{paddingRight:18}}>
                            <Octicons name="share-android" size={20} color="white"  />
                        </View>
                        <View>
                            <MaterialIcons name="more-horiz" size={24} color="white" />
                        </View>
                    </Pressable>
                </View>
                <View 
                    style={{ 
                        marginTop: 14,
                        paddingHorizontal: 18,
                        backgroundColor:'rgba(69, 69, 69, 0.7)',
                        marginTop:520
                        }}
                    >
                    <View style={{flexDirection:"row", alignItems: "center", justifyContent: "space-between",
                        alignItems: "center",}}>
                        <View>
                            <Text
                                style={{
                                color: "white",
                                fontSize: 14,
                                fontWeight: 500,
                                lineHeight: 22,
                                textAlign: "left",
                                paddingTop:10
                                }}
                            >
                                Pilihan yang terbaik
                            </Text>
                            <Text
                                style={{ 
                                    fontSize: 12, 
                                    fontWeight: 500, 
                                    lineHeight:22,
                                    color: "#808080",
                                    paddingBottom:10,
                                    }}
                                    >
                                Tulus, Rizky Febian
                            </Text>
                        </View>
                        <Pressable>
                            <Feather name="heart" size={24} color="#808080" />
                        </Pressable>
                    </View>
                    <Image source={require("../assets/icons/progressbar.png")}/>
                    <Pressable style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:14}}>
                        <Pressable>
                        <Ionicons name="shuffle" size={24} color="white" />
                        </Pressable>
                        <Pressable>
                        <Ionicons name="play-skip-back-sharp" size={24} color="white" />
                        </Pressable>
                        <Pressable>
                        <MaterialIcons name="play-circle-fill" size={50} color="#26BB5B" />
                        </Pressable>
                        <Pressable>
                        <Ionicons name="play-skip-forward-sharp" size={24} color="white" />
                        </Pressable>
                        <Pressable>
                        <Feather name="repeat" size={24} color="white" />
                        </Pressable>
                    </Pressable>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 18,
                        paddingVertical:10
                    }}>
                        <View style={{flexDirection:"row", alignItems: "center"}}>
                            <Image style={{
                                width: 40,
                                height: 40,
                                borderRadius: 50,
                                resizeMode: "cover",
                                }}
                                source={{
                                url: "https://images.pexels.com/photos/3772519/pexels-photo-3772519.jpeg?auto=compress&cs=tinysrgb&w=600",
                            }}/>
                            <View  style={{paddingLeft: 10}}> 
                                <Text
                                    style={{
                                        fontSize: 10,
                                        fontWeight: 500,
                                        lineHeight: 22,
                                        color: "#808080",
                                    }}
                                    >
                                    From playlist
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 10,
                                        fontWeight: 500,
                                        lineHeight: 22,
                                        color: "white",
                                    }}
                                    >
                                    Your Top Songs 2024
                                </Text>
                            </View>  
                        </View>
                    <Pressable onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
                    </Pressable>
                </View>
            </ScrollView>
        </ImageBackground>
    </LinearGradient>
    );
};



export default PlayingScreen

const styles = StyleSheet.create({})