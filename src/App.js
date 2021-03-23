import { StatusBar } from "expo-status-bar";
import React, { useState, createContext } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import store from "./store/store";
import TabNavigator from "./Navigation/TabNavigator";
import {
  Provider as PaperProvider,
  DarkTheme as dark,
} from "react-native-paper";
import { Provider } from "react-redux";
import { ThemeProvider } from "./DarkMood";
const { width } = Dimensions.get("screen");
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PaperProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
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
