import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NewReleases from "./components/NewReleases/NewReleases";
import TabNavigator from "./components/Navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <NewReleases /> */}
    //   <NavigationContainer>
    //     <TabNavigator />
    //   </NavigationContainer>

    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
