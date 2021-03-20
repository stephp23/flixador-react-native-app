import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import Movies from "../../screens/Movies";
import Team from "../../screens/Team";
import TvShows from "../../screens/TvShows";

const HomeStack = createStackNavigator();
const MoviesStack = createStackNavigator();
const TeamStack = createStackNavigator();
const TvShowsStack = createStackNavigator();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
export const MoviesStackScreen = () => {
  return (
    <MoviesStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Movies" component={Movies} />
    </MoviesStack.Navigator>
  );
};
