import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Tab from "./Tab";
const { width } = Dimensions.get("screen");
const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState("Home");
  const { routes } = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? "red" : "black";
  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 20,
    width: width,

    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",

    width: 300,
    borderRadius: 100,
  },
});
