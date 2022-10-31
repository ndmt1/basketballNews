import React from "react";
import { Text, StyleSheet, View, Image, StatusBar } from "react-native";

export const MoreO = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/shirt.png")}
            style={{ resizeMode: "contain", height: 300 }}
          ></Image>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <View
              style={{
                marginHorizontal: "9%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.font}>Daily Streak</Text>
              <Text style={styles.number}>2</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                marginHorizontal: "9%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.font}>Total Score</Text>
              <Text style={styles.number}>19</Text>
            </View>
          </View>

          <View>
            <View
              style={{
                marginHorizontal: "9%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.font}>Appearances</Text>
              <Text style={styles.number}>34</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            color: "#05375a",
            fontSize: 20,
            fontFamily: "sans-serif-light",
            fontWeight: "bold",
          }}
        >
          CITY WANT TO SIGN YOU
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e47041",
  },
  background: {
    
    marginTop: 70,
    paddingBottom: 10,
    flex: 2,
  },

  footer: {
    flex: 1.5,
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  font: {
    fontWeight: "500",
    fontSize: 12,
    color: "#ffffff",
  },
  number: {
    fontSize: 40,
    fontWeight: "300",
    color: "#ffffff",
  },
});
