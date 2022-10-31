import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import List from "./Listing";
import { Ionicons } from "@expo/vector-icons";

function ListCard(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      story:
        'https://cdn.nba.com/manage/2022/10/KawhiAD-e1666989517548.jpg',
      navigat: "",
      description: "NBA FANTASY MAILBAG: IS ANFERNEE SIMONS' STOCK ON THE RISE?",
    },
    {
      id: "2",
      story: 
        'https://cdn.nba.com/manage/2022/10/My-project-35-1-1568x882.jpg',
      description: "NBA DRAFTKINGS & FANDUEL DFS PRIMER: 10/27",
    },
    {
      id: "3",
      story:
        'https://cdn.nba.com/manage/2022/10/grant-williams-reacts-vs-bulls.jpg',
      navigat: "",
      description: "BOSTON'S GRANT WILLIAMS SUSPENDED 1 GAME WITHOUT PAY",
    },
    {
      id: "4",
      story:
        'https://cdn.nba.com/manage/2022/10/USATSI_19273995-2048x1192.jpg',
      navigat: "",
      description: "BOOKER, CURRY AND MORANT LOOK EVEN BETTER TO START SEASON",
    },
    {
      id: "5",
      story:
        'https://cdn.nba.com/manage/2022/10/kawhi-lebron-opening-night-cropped.jpg',
      navigat: "",
      description: "KEY TAKEAWAYS FROM THRILLING OPENING WEEK OF 2022-23 NBA SEASON",
    },
  ]);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollView>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 15 }}>
                <View style={styles.card}>
                  <TouchableHighlight onPress={() => console.log("hi")}>
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {" "}
                      {item.description}{" "}
                    </Text>
                  </View>
                  <View style={{ top: 30, flexDirection: "row" }}>
                    <Ionicons
                      name="heart-outline"
                      size={20}
                      style={{ marginLeft: 10 }}
                    />
                    <Ionicons
                      name="chatbox-outline"
                      size={20}
                      style={{ marginLeft: 10 }}
                    />
                    <Ionicons name="bookmark-outline" size={20}  style={{ marginLeft: 10 }}/>
                  </View>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 290,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 16,
  },
  images: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default ListCard;
