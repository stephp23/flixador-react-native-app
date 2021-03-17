import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NewReleases from "./components/NewReleases/NewReleases";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>How are you </Text>
      <NewReleases />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
