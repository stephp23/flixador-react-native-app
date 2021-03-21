import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const FullMovie = ({ route: { params } }) => {
  const { id } = params;
  ///{}
  return (
    <View style={styles.root}>
      <Text> hey this is full movie : {id}</Text>
    </View>
  );
};

export default FullMovie;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
