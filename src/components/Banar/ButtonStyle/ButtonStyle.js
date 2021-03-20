import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ButtonStyle = ({ text, color, onPress }) => {
  const content = (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.text}> {text}</Text>
    </View>
  );
  return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    color: "#fff",
    paddingRight: 32,
    paddingLeft: 32,
    paddingBottom: 8,
    paddingTop: 8,
    marginRight: 16,
    marginLeft: 30,
    marginTop: 30,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default ButtonStyle;
