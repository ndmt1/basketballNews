import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { authentication } from "../Firebase/firebase-config";

export const Profile = ({ navigation, route }) => {
  const signOut = () => {
    signOut
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={validatForm} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  button: {
    width: 280,
    height: 51,
    backgroundColor: "#6acbdd",
    marginTop: 21,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText:{
    fontWeight:"bold",
    fontSize:18
  }
});
