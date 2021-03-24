import React, { useState } from "react";
import { useTheme } from "../DarkMood";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Tab from "./Tab";
const { width } = Dimensions.get("screen");
const TabBar = ({ state, navigation }) => {
  const dark = useTheme();
  const [selected, setSelected] = useState("Home");
  const { routes } = state;

  const renderColor = (currentTab) =>
    currentTab === selected ? "#8b0000" : "black";

  const renderColorDark = (currentTab) =>
    currentTab === selected ? "#8b0000" : "white";

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={dark ? styles.containerDark : styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={dark ? renderColorDark(route.name) : renderColor(route.name)}
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
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 4,
    shadowRadius: 10,
    width: 300,
    borderRadius: 100,
  },
  containerDark: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#111",
    shadowColor: "#111",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 4,
    shadowRadius: 10,
    width: 300,
    borderRadius: 100,
  },
});
