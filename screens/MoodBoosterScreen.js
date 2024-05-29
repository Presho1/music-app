import { Pressable, ScrollView, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeaturingCard from "../components/FeaturingCard";

const MoodBoosterScreen = () => {
  const navigation = useNavigation();
  return (
    <>
    <LinearGradient colors={["black", "black"]} style={{ flex: 1 }}>
        <ImageBackground style={{ flex: 1, resizeMode: "cover", height: 377}}
            source={{
                url: "https://images.pexels.com/photos/3756767/pexels-photo-3756767.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}>
            <ScrollView style={{ flex: 1, marginTop: 57 }}>
                <View style={{flexDirection:"row", justifyContent:'space-between', marginLeft: 11, marginRight:31 }}>
                    <Pressable
                    onPress={() => navigation.goBack()}
                    >
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
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
                <View style={{ paddingTop:200, paddingLeft: 18}}>
                    <Text 
                    style={{
                        fontSize: 32, 
                        lineHeight: 22, 
                        fontWeight:"300",
                        color: "white",
                        paddingTop:20,
                       }}>
                    YOUR TOP SONGS
                    </Text>
                    <Text 
                    style={{
                        fontSize: 44, 
                        lineHeight: 22,
                        fontWeight: "700", 
                        color: "white",
                        paddingTop:20,
                    }}>
                    2024
                    </Text>
                </View>
                <View style={{left:332, top:-14}}>
                    <Pressable>
                    <MaterialIcons name="play-circle-fill" size={50} color="#26BB5B" />
                    </Pressable>
                </View>
                <View style={{paddingLeft:18, flexDirection:"row"}}>
                   <View style={{flexDirection:"row", alignItems:"center", paddingRight:20}}>
                        <View style={{paddingRight:6}} >
                            <Foundation name="heart" size={14} color="#808080" />
                        </View>
                        <Text style={{color:"#808080", fontSize:10, lineHeight:15, fontWeight:400}}>
                            53,453,235 likes
                        </Text>
                   </View>
                   <View style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={{paddingRight:6}}>
                            <MaterialCommunityIcons name="clock-time-three-outline" size={14} color="#808080" />
                        </View>
                        <Text style={{color:"#808080", fontSize:10, lineHeight:15, fontWeight:400}}>
                            2h 35min
                        </Text>
                   </View>
                </View>
                <View style={{paddingLeft:18, paddingTop:20}}>
                    <Text style={{
                        color:"white",
                        fontSize:14, 
                        lineHeight:21, 
                        fontWeight:400, }}>
                            Featuring
                    </Text>
                </View>
                <View>
                    <FeaturingCard/>
                    <FeaturingCard/>
                    <FeaturingCard/>
                    <FeaturingCard/>
                    <FeaturingCard/>
                    <FeaturingCard/>
                    <FeaturingCard/>
                </View>
            </ScrollView>
      </ImageBackground>
    </LinearGradient>


    </>


  );
};

export default MoodBoosterScreen;

const styles = StyleSheet.create({});
