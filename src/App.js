import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import store from "./store/store";
import TabNavigator from "./Navigation/TabNavigator";
import { Provider } from "react-redux";
const { width } = Dimensions.get("screen");
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
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
