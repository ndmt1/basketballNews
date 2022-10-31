import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export const Success = (props) => {
  return props.successMessage ? (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.close()}
    >
      <Text style>{props.successMessage} </Text>
    </Overlay>
  ) : (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
    >
      <ActivityIndicator size={"large"} color={"#6acbdd"} />
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
