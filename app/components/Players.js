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
import Player from "./PlayerCard";

function Players() {
  return (
    <View>
      <View style={{ marginTop: 25, left: 25 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>PLAYERS</Text>
      </View>
      <View>
        <Player />
      </View>
    </View>
  );
}
