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

function List(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      story:
        'https://thesixersense.com/wp-content/uploads/getty-images/2017/07/1350852170.jpeg',
      navigat: "",
      description: "",
    },
    {
      id: "2",
      story:
        'https://8points9seconds.com/wp-content/uploads/getty-images/2018/08/1239597049.jpeg',
      navigat: "",
      description: "",
    },
    {
      id: "3",
      story:
        'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0617%2Fr1026123_1296x729_16%2D9.jpg',
      navigat: "",
      description: "",
    },
    {
      id: "4",
      story:
        'https://cdn.fantasypros.com/wp-content/images/373298/730x375.jpg',
      navigat: "",
      description: "",
    },
    {
      id: "5",
      story:
        'https://cdn.vox-cdn.com/thumbor/5bnFLvteNg6HwEf2vCem2ScLJXo=/392x62:3012x2618/1400x933/filters:focal(1445x629:2021x1205):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71026656/1236013483.0.jpg',
      navigat: "",
      description: "",
    },
  ]);

  return (
    <View>
      <ScrollView style={styles.scroll_view}>
        <FlatList
          horizontal
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.card}>
                  <TouchableHighlight onPress={() => console.log("hi")}>
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                  <Text>
                    
                  </Text>
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
    width: 100,
    height: 170,
    backgroundColor: "#dddddd",
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 16,
  },
  images: {
    width: 100,
    height: 170,
    borderRadius: 16,

  },
  scroll_view: {
    flexDirection: "row",
  },
});

export default List;
