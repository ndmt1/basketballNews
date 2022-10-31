import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import Animated, { Easing } from "react-native-reanimated";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import List from "../components/Listing";
import ListCard from "../components/ListCard";
import { Ionicons } from "@expo/vector-icons";
import Player from "../components/PlayerCard";
const { Value, timing } = Animated;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll_x: new Value(0),
    };
  }

  _onScroll = (e) => {
    const new_x = e.nativeEvent.contentOffset.x;
    this.setState({ scroll_x: new Value(new_x) });
  };

  render() {
    const _card_height = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [170, 50],
      extrapolate: "clamp",
    });

    const _card_width = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [100, 50],
      extrapolate: "clamp",
    });

    const _card_position_top = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 60],
      extrapolate: "clamp",
    });

    const _card_position_left = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [10, 0],
      extrapolate: "clamp",
    });

    const _card_border_left_radius = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [16, 0],
      extrapolate: "clamp",
    });

    const _image_container_height = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [100, 40],
      extrapolate: "clamp",
    });

    const _image_container_margin = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 4],
      extrapolate: "clamp",
    });

    const _image_container_border_radius = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 40],
      extrapolate: "clamp",
    });

    const _cta_top = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [20, -20],
      extrapolate: "clamp",
    });

    const _cta_opacity = this.state.scroll_x.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    const _icon_scale = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0.6],
      extrapolate: "clamp",
    });

    const _icon_position = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [-15, -28],
      extrapolate: "clamp",
    });

    const _icon_right = this.state.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [33, -3],
      extrapolate: "clamp",
    });

    return (

      <View style={styles.container}>
        <View style={{position: 'absolute', zIndex: 1, alignSelf: 'center', paddingTop: 70, paddingBottom: 10, backgroundColor: "#ef7f4d", width: '100%', height: 130, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
            <View style={styles.image}>
              <Image
                style={{ height: 65, width: 65}}
                source={require("../assets/logo.png")}
              ></Image>
            </View>
          </View>
        <ScrollView 
        style={{ marginTop: StatusBar.currentHeight }}>

          <View style={styles.background}>
            <View style={styles.image}>
              <Image
                style={{ height: 65, width: 65}}
                source={require("../assets/logo.png")}
              ></Image>
            </View>
          </View>
          

          <View style={styles.footer}>
            <View style={{ marginTop: 10, left: 25 }}></View>

            <View style={{ marginTop: 5 }}>
              <Animated.View
                style={[
                  styles.card,
                  {
                    width: _card_width,
                    height: _card_height,
                    top: _card_position_top,
                    left: _card_position_left,
                    borderTopLeftRadius: _card_border_left_radius,
                    borderBottomLeftRadius: _card_border_left_radius,
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styles.image_container,
                    {
                      height: _image_container_height,
                      margin: _image_container_margin,
                      borderRadius: _image_container_border_radius,
                    },
                  ]}
                >
                  
                </Animated.View>
                <Animated.View style={[styles.cta_container]}>
                  <Animated.Text
                    style={[
                      styles.text,
                      { paddingTop: _cta_top, opacity: _cta_opacity },
                    ]}
                  >
                    Create a{"\n"} story
                  </Animated.Text>
                  <Animated.View
                    style={[
                      styles.icon_container,
                      {
                        transform: [{ scale: _icon_scale }],
                        top: _icon_position,
                        right: _icon_right,
                      },
                    ]}
                  >
                    <Ionicons name="add-outline" size={18} color={"#ffffff"} />
                  </Animated.View>
                </Animated.View>
              </Animated.View>
              <ScrollView
                style={styles.scroll_view}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={this._onScroll}
                scrollEventThrottle={16}
              >
                <View style={styles.fake_card_ghost} />
                <List />
                <View style={styles.column_spacer} />
              </ScrollView>
              <View>
                <View style={{ marginTop: 25, left: 25 }}>
                  <Text style={{ fontSize: 20, fontWeight: "700" }}>
                    PLAYERS
                  </Text>
                </View>
                <View>
                  <Player />
                </View>
              </View>
              <View style={{ marginTop: 25, left: 25 }}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  FEATURED
                </Text>
              </View>
              <ScrollView style={{alignSelf: 'center'}} >
                <ListCard />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef7f4d",
  },

  background: {
    flex: 1,
    marginTop: 70,
    paddingBottom: 10,
  },

  footer: {
    flex: 12,
    backgroundColor: "#f5f5f5",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
  },
  card: {
    backgroundColor: "white",
    position: "absolute",
    zIndex: 10,
    elevation: 10,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  image_container: {
    position: "relative",
    overflow: "hidden",
  },
  image_card: {
    flex: 1,
    width: null,
    height: null,
  },
  cta_container: {
    position: "relative",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  icon_container: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "#b54213",
    position: "absolute",
    borderWidth: 3,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  scroll_view: {
    flexDirection: "row",
  },
  fake_card: {
    width: 119,
    height: 170,
    backgroundColor: "#dddddd",
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
  },
  fake_card_ghost: {
    backgroundColor: "white",
    marginLeft: 10,
    borderWidth: 0,
    width: 100,
    height: 170,
  },
  column_spacer: {
    width: 10,
    height: 170,
  },
  scrollScreen: {},
});

export default Home;
