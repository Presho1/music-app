import { StyleSheet, Image, View, Text, ScrollView, Pressable,} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FavoriteArtistCard from "../components/FavoriteArtistCard";
import RecentlyPlayedCard from "../components/RecentlyPlayedCard";
import MadeForYou from "../components/MadeForYou";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <LinearGradient colors={["", "black"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View
          style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 18,
                paddingBottom: 22,
          }}>
            <View>
                <Text
                style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    lineHeight: 22,
                    color: "white",
                }}
                >
                Hello Gilang!
                </Text>
                <Text
                style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    lineHeight: 22,
                    color: "#808080",
                }}
                >
                Let’s listen to something cool today
                </Text>
            </View>
            <View style={{ paddingLeft: 107 }}>
                <Image
                style={{
                    width: 34,
                    height: 34,
                    borderRadius: 20,
                    resizeMode: "cover",
                }}
                source={{
                    url: "https://images.pexels.com/photos/3772519/pexels-photo-3772519.jpeg?auto=compress&cs=tinysrgb&w=600",
                }}
                />
            </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 18,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              lineHeight: 22,
            }}
          >
            Your favourite artist
          </Text>
          <View>
            <Image source={require("../assets/images/arrow-left.png")} />
          </View>
        </View>

        <View style={{ paddingTop: 14, paddingLeft: 18, flexDirection: "row" }}>
          <FavoriteArtistCard />
          <FavoriteArtistCard />
          <FavoriteArtistCard />
          <FavoriteArtistCard />
          <FavoriteArtistCard />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 18,
            paddingTop: 21,
          }}
          >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              lineHeight: 22,
            }}
          >
            Recently played
          </Text>
          <View>
            <Image source={require("../assets/images/arrow-left.png")} />
          </View>
        </View>

        <View style={{ paddingTop: 14, paddingLeft: 18, flexDirection: "row" }}>
          <RecentlyPlayedCard />
          <RecentlyPlayedCard />
          <RecentlyPlayedCard />
          <RecentlyPlayedCard />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 18,
            paddingTop: 21,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              lineHeight: 22,
            }}
          >
            Made for you
          </Text>
          <View>
            <Image source={require("../assets/images/arrow-left.png")} />
          </View>
        </View>

        <View style={{ paddingTop: 14, paddingLeft: 18, flexDirection: "row" }}>
          <MadeForYou />
          <MadeForYou />
          <MadeForYou />
        </View>

        <Pressable 
            style={{ 
                flexDirection: "row", 
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#232323",
                marginTop: 7,
                paddingVertical: 5,
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
                        paddingTop: 10,
                        fontSize: 14,
                        fontWeight: "bold",
                        lineHeight: 22,
                        textAlign: "left",
                        }}
                    >
                        Ziva Mag
                    </Text>
                    <Text
                         style={{ 
                            fontSize: 10, 
                            fontWeight: "bold", 
                            lineHeight:22,
                            color: "#808080",
                            paddingBottom: 10 }}
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
                    <FontAwesome5 name="play-circle" size={24} color="#808080" />
                </View>
          </View>
        </Pressable>
      </ScrollView>
    </LinearGradient>

    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
