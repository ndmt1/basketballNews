import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../app/screens/Home";
import Fixture from "../app/screens/Fixture";
import Video from "../app/screens/Video";
import { MoreO } from "../app/screens/More";
import VideoDetail from "../app/components/video.detai";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";
import { authetication } from "../app/Firebase/firebase-config";

const NavOptionHandler = () => ({
  headerShown: false,
});

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const VideoStack = createNativeStackNavigator();
function VideoStacks() {
  return (
    <VideoStack.Navigator screenOptions={{ headerShown: false }}>
      <VideoStack.Screen name="Video Stack" component={Video} />
    </VideoStack.Navigator>
  );
}

const FixtureStack = createNativeStackNavigator();
function FixtureStacks() {
  return (
    <FixtureStack.Navigator screenOptions={{ headerShown: false }}>
      <FixtureStack.Screen name="Fixture Stack" component={Fixture} />
    </FixtureStack.Navigator>
  );
}

const MoreStack = createNativeStackNavigator();
function MoreStacks() {
  return (
    <MoreStack.Navigator screenOptions={{ headerShown: false }}>
      <MoreStack.Screen name="More Stack" component={MoreO} />
    </MoreStack.Navigator>
  );
}

const VideoDetailStack = createNativeStackNavigator();
function VidDetails() {
  return (
    <VideoDetailStack.Navigator screenOptions={{ headerShown: false }}>
      <VideoDetailStack.Screen name="Detail Video" component={VideoDetail} />
    </VideoDetailStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Video") {
            iconName = focused ? "play" : "play-outline";
          } else if (route.name === "Fixture") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "More") {
            iconName = focused ? "list" : "list-outline";
          }
          return <Ionicons name={iconName} size={30} color={"#b54213"} />;
        },
        tabBarActiveTintColor: "#b54213",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={NavOptionHandler}
      />
      <Tab.Screen
        name="Video"
        component={VideoStacks}
        options={NavOptionHandler}
      />
      <Tab.Screen
        name="Fixture"
        component={FixtureStacks}
        options={NavOptionHandler}
      />
      <Tab.Screen
        name="More"
        component={MoreStacks}
        options={NavOptionHandler}
      />
    </Tab.Navigator>
  );
}

const RootStacks = createNativeStackNavigator();
function RootStack() {
  return (
    <NavigationContainer>
      <RootStacks.Navigator screenOptions={{ headerShown: false }}>
        <RootStacks.Screen name="Tabs" component={Tabs} />
      </RootStacks.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
