import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";

export const Error = (props) => {
  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.hideErr(false)}
    >
      <Text style>{props.err} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.hideErr(false)}
      >
        <Text style={styles.text}>Okay</Text>
      </TouchableOpacity>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: 200,
    width: "80%",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginTop: 20,
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
  text: {
    fontWeight: "bold",
  },
});
