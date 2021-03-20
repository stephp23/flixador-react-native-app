import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import Movies from "../../screens/Movies";
import Team from "../../screens/Team";
import TvShows from "../../screens/TvShows";
import FullMovie from "../../components/FullMovie/FullMovie";
import { color } from "react-native-reanimated";

const HomeStack = createStackNavigator();
const MoviesStack = createStackNavigator();
const TeamStack = createStackNavigator();
const TvShowsStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTransparent: true,
        title: "",
        color: 'color="#fff"',
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="movie" component={FullMovie} />
    </HomeStack.Navigator>
  );
};
export const MoviesStackScreen = () => {
  return (
    <MoviesStack.Navigator screenOptions={{ headerShown: false }}>
      <MoviesStack.Screen name="Movies" component={Movies} />
    </MoviesStack.Navigator>
  );
};
export const TvShowsStackScreen = () => {
  return (
    <TvShowsStack.Navigator screenOptions={{ headerShown: false }}>
      <TvShowsStack.Screen name="TvShows" component={TvShows} />
    </TvShowsStack.Navigator>
  );
};
export const TeamStackScreen = () => {
  return (
    <TeamStack.Navigator screenOptions={{ headerShown: false }}>
      <TeamStack.Screen name="Team" component={Team} />
    </TeamStack.Navigator>
  );
};
// export const FullMovieStackScreen = () => {
//   return (
//     <FullMovieStack.Navigator screenOptions={{ headerShown: false }}>
//       <FullMovie.Screen name="FullMovie" component={FullMovie} />
//     </FullMovieStack.Navigator>
//   );
// };
