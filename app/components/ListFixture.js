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

function ListFix(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      city: "https://ssl.gstatic.com/onebox/media/sports/logos/wkCDHakxEThLGoZ4Ven48Q_96x96.png",
      cityname: "Sacramento",
      other:
        "https://ssl.gstatic.com/onebox/media/sports/logos/0nQXN6OF7wnLY3hJz8lZJQ_96x96.png",
      othername: "Mianmi Heat",
      score: "119-113",
      date: "July 23",
      home: "yes",
    },
    {
      id: "2",
      city: "https://ssl.gstatic.com/onebox/media/sports/logos/ToeKy5-TrHAnTCl-qhuuHQ_96x96.png",
      other:
        "https://ssl.gstatic.com/onebox/media/sports/logos/wkCDHakxEThLGoZ4Ven48Q_96x96.png",
      othername: "Sacramento",
      cityname: "Charlotte",

      score: "130-111",
      date: "July 30",
      home: "yes",
    },
    {
      id: "3",
      city: "https://ssl.gstatic.com/onebox/media/sports/logos/NBkMJapxft4V5kvufec4Jg_96x96.png",
      other:
        "https://ssl.gstatic.com/onebox/media/sports/logos/andumiE_wrpDpXvUgqCGYQ_96x96.png",
      othername: "Indiana",
      cityname: "W.Wizards",

      score: "117-127",
      date: "August 4",
      home: "no",
    },
    {
      id: "4",
      city: "https://ssl.gstatic.com/onebox/media/sports/logos/GDJBo7eEF8EO5-kDHVpdqw_96x96.png",
      other:
        "https://ssl.gstatic.com/onebox/media/sports/logos/NAlGkmv45l1L-3NhwVhDPg_96x96.png",
      othername: "Cleverland",
      cityname: "Boston",

      score: "132-123",
      date: "August 10",
      home: "no",
    },
    {
      id: "5",
      city: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/615px-Manchester_City_FC_logo.svg.png?20171110155930",
      other:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/225px-Real_Madrid_CF.svg.png",
      othername: "Real Mad",
      cityname: "Man City",

      score: "2 - 3",
      date: "August 13",
      home: "yes",
    },
    {
      id: "6",
      city: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/615px-Manchester_City_FC_logo.svg.png?20171110155930",
      other: "https://upload.wikimedia.org/wikipedia/vi/b/b1/WestHam.png",
      othername: "West Ham",
      cityname: "Man City",

      score: "1 - 2",
      date: "August 20",
      home: "no",
    },
  ]);

  return (
    <View style={styles.mainview}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView>
          <FlatList
            data={lists}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              if (item.home === "yes") {
                return (
                  <View style={{ marginVertical: 15 }}>
                    <View style={styles.card}>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <View style={styles.small}>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 20,
                              fontWeight: "500",
                            }}
                          >
                            {item.score}
                          </Text>
                        </View>
                      </View>
                      <View style={{ left: 70, bottom: 50 }}>
                        <Image
                          source={{ uri: item.city }}
                          style={{ width: 60, height: 60 }}
                        ></Image>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>
                          {item.cityname}
                        </Text>
                      </View>
                      <View style={{ left: 258, bottom: 130 }}>
                        <Image
                          source={{ uri: item.other }}
                          style={{ width: 60, height: 60 }}
                        ></Image>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>
                          {item.othername}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }
              {
                return (
                  <View style={{ marginVertical: 15 }}>
                    <View style={styles.card}>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <View style={styles.small}>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 20,
                              fontWeight: "500",
                            }}
                          >
                            {item.score}
                          </Text>
                        </View>
                      </View>
                      <View style={{ left: 70, bottom: 50 }}>
                        <Image
                          source={{ uri: item.other }}
                          style={{ width: 60, height: 60 }}
                        ></Image>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>
                          {item.othername}
                        </Text>
                      </View>
                      <View style={{ left: 258, bottom: 130 }}>
                        <Image
                          source={{ uri: item.city }}
                          style={{ width: 60, height: 60 }}
                        ></Image>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>
                          {item.cityname}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }
            }}
          ></FlatList>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: "#e4e4e4",
  },

  card: {
    width: 388,
    height: 120,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
  },
  images: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  small: {
    width: 80,
    height: 40,
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListFix;
