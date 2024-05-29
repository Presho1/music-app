import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const FavoriteArtistCard = () => {
  return (
    <Pressable style={{paddingRight:24}}>
        <Image
            style={{
                width: 64,
                height: 64,
                borderRadius: 50,
                resizeMode: "cover",

            }}
            source={{
                url: "https://images.pexels.com/photos/3772519/pexels-photo-3772519.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
        />
        <Text 
        style={{
            color:"white",
            paddingTop: 10,
            fontSize:14,
            fontWeight:"bold",
            lineHeight:22,
            textAlign: "center"
        }}
            >Ziva Mag</Text>
    </Pressable>       
  )
}

export default FavoriteArtistCard

const styles = StyleSheet.create({})