import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TvShows = () => {
  return (
    <View style={styles.root}>
      <Text> this is is tv shows </Text>
    </View>
  );
};

export default TvShows;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
