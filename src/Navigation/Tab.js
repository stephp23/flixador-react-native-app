import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = ({ color, tab, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon === "home" && <AntDesign name={icon} size={30} color={color} />}
      {icon === "folder-video" && (
        <Entypo name={icon} size={30} color={color} />
      )}
      {icon === "tv" && <Feather name={icon} size={30} color={color} />}
      {icon === "team" && <AntDesign name={icon} size={30} color={color} />}
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
});
