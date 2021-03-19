import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Team = () => {
  return (
    <View style={styles.root}>
      <Text>this Team page</Text>
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
