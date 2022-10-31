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

function Player(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      story:
        'https://sportsnaut.com/wp-content/uploads/2022/02/top-50-nba-players-tyrese-haliburton-indiana-pacers-17701364-748x420.jpg.webp',
      navigat: "",
      description: "",
    },
    {
      id: "2",
      story:
        'https://fampeople.com/wp-content/uploads/2020/09/Lebron-James-1024x576.jpg',
      navigat: "",
      description: "",
    },
    {
      id: "3",
      story:
        'https://fampeople.com/wp-content/uploads/2020/09/Shaquille-O%E2%80%99Neal-scaled.jpg',
      navigat: "",
      description: "",
    },
    {
      id: "4",
      story:
        'https://i.insider.com/5e540a10fee23d21911308e2?width=600&format=jpeg&auto=webp',
      navigat: "",
      description: "",
    },
    {
      id: "5",
      story:
        'https://i.insider.com/6047fdf7df53f8001802a60c?width=600&format=jpeg&auto=webp',
      navigat: "",
      description: "",
    },
  ]);
  return (
    <View
   
    >   
      <ScrollView>
        <FlatList
          data={lists}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 5 }}>
                <View style={styles.card}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="##00138"
                    onPress={() => console.log("hi")}
                  >
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {" "}
                      {item.description}{" "}
                    </Text>
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
    width: 90,
    height: 90,
    backgroundColor: "#001838",
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 35,
  },
  images: {
    width: 90,
    height: 90,
    borderRadius: 35,
  },
});

export default Player;
