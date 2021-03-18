import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Movies = () => {
  return (
    <View style={styles.root}>
      <Text>this is movies</Text>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
