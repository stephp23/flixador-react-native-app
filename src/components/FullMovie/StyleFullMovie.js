import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StyleFullMovie = () => {
  return (
    <View style={styles.root}>
      <Text> hey this is full movie </Text>
    </View>
  );
};

export default StyleFullMovie;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
