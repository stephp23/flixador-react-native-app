import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Home from "../../screens/Home";
import Movies from "../../screens/Movies";
import TvShows from "../../screens/TvShows";
import Team from "../../screens/Team";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ icon: "home" }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        initialParams={{ icon: "folder-video" }}
      />
      <Tab.Screen
        name="TvShows"
        component={TvShows}
        initialParams={{ icon: "tv" }}
      />
      <Tab.Screen
        name="Team"
        component={Team}
        initialParams={{ icon: "team" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});