import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const StyleFullMovie = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text> hey this is full movie </Text>
      <Button
        title="go back home "
        onPress={() => navigation.navigate("movie")}
      />
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
