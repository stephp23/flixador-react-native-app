import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";

import TabNavigator from "./Navigation/TabNavigator";
import Search from "./components/Banar/Search/Search";
const { width } = Dimensions.get("screen");
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    marginTop: 30,
    width: width,

    alignItems: "center",
    justifyContent: "center",
  },
});
