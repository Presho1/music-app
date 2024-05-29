import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';





const FeaturingCard = () => {
    const navigation = useNavigation();


  return (
    <Pressable 
    onPress={() => navigation.navigate("Playing")}
            style={{ 
                flexDirection: "row", 
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 14,
                paddingHorizontal: 18,
                }}
            >
            <View style={{flexDirection:"row", alignItems: "center"}}>
                <Image
                    style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    resizeMode: "cover",
                    }}
                    source={{
                    url: "https://images.pexels.com/photos/3772519/pexels-photo-3772519.jpeg?auto=compress&cs=tinysrgb&w=600",
                    }}
                />
                <View style={{paddingLeft: 14}}>
                    <Text
                        style={{
                        color: "white",
                        fontSize: 10,
                        fontWeight: "bold",
                        lineHeight: 22,
                        textAlign: "left",
                        }}
                    >
                        Pilihan yang terbaik
                    </Text>
                    <Text
                         style={{ 
                            fontSize: 10, 
                            fontWeight: "bold", 
                            lineHeight:22,
                            color: "#808080",
                            
                            }}
                            >
                        Tulus, Rizky Febian
                    </Text>
                </View>
          </View>
          <View style={{flexDirection: "row"}}>
                <View>
                    <Feather name="heart" size={24} color="#808080" />
                </View>
                <View style={{paddingLeft: 20}}>
                    <MaterialIcons name="more-horiz" size={24} color="white" />   
                </View>
          </View>
        </Pressable>


       
  )
}

export default FeaturingCard

const styles = StyleSheet.create({})