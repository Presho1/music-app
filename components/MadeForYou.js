import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const MadeForYou = () => {
  return (
    <Pressable style={{paddingRight:21}}>
        <Image
            style={{
                width: 120,
                height: 120,
                borderRadius: 16,
                resizeMode: "cover",
            }}
            source={{
                url: "https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            >Daily Mix 2
        </Text>
        <Text 
        style={{ 
            fontSize: 10, 
            fontWeight: "bold", 
            lineHeight:22,
            color: "#808080" }}
            >
        Tulus, Rizky Febian
        </Text>
    </Pressable>

  )
}

export default MadeForYou

const styles = StyleSheet.create({})