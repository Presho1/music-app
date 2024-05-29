import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RecentlyPlayedCard = () => {
    const navigation = useNavigation();
  return (
    <Pressable 
        onPress={() => navigation.navigate("Booster")}
        style={{paddingRight:21}}>
        <Image
            style={{
                width: 120,
                height: 120,
                borderRadius: 16,
                resizeMode: "cover",
            }}
            source={{
                url: "https://images.pexels.com/photos/3756767/pexels-photo-3756767.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            />
        <Text 
            style={{
                color:"white",
                paddingTop: 12,
                fontSize:12,
                fontWeight:"bold",
                lineHeight:22,
                textAlign: "left"
            }}
                >Your Top Songs
        </Text>
    </Pressable>
  )
}

export default RecentlyPlayedCard

const styles = StyleSheet.create({})