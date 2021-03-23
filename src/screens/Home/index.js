import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";
import Banar from "../../components/Banar/Banar";
import ChildrenFamily from "../../components/ChildrenFamily/ChildrenFamily";
import Comedy from "../../components/Comedy/Comedy";
import MostPopularMov from "../../components/MostPopularMov/MostPopularMov";
import NewReleases from "../../components/NewReleases/NewReleases";
import ScifiHorror from "../../components/ScifiHorror/ScifiHorror";
import TopRatedMov from "../../components/TopRatedMov/TopRatedMov";
import { createStackNavigator } from "@react-navigation/stack";
import FullMovie from "../../components/FullMovie/FullMovie";
import Search from "../../components/Banar/Search/Search";
import { useSelector } from "react-redux";
import styles from "./styleHome";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Home = ({ navigation, navigation: { navigate } }) => {
  const movies = useSelector((state) => state.movies.movies);
  const text = useSelector((state) => state.movies.text);
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={120}
        decelerationRate="fast"
        pagingEnabled
      >
        <Banar />

        {movies ? (
          <View style={styles.row1}>
            <Text style={styles.text}>
              {text ? `Results Of : ${text}` : ""}
            </Text>

            <View style={styles.row_posters}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{}}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={120}
                decelerationRate="slow"
                pagingEnabled
              >
                {movies.map((searchMovies, index) => {
                  return (
                    <TouchableHighlight
                      onPress={() => navigate("movie", searchMovies)}
                      key={index}
                      style={{
                        borderRadius: 28,
                        marginRight: 10,
                        resizeMode: "contain",
                        height: 230,
                        width: 150,
                      }}
                    >
                      <Image
                        style={{ transform: "scale: 4.1" }}
                        style={styles.row_poster}
                        source={{ uri: `${imgUrl}${searchMovies.poster_path}` }}
                      />
                    </TouchableHighlight>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          ""
        )}

        <NewReleases navigation={navigation} />

        <TopRatedMov navigation={navigation} />
        <MostPopularMov navigation={navigation} />
        <ScifiHorror navigation={navigation} />
        <ChildrenFamily navigation={navigation} />
        <Comedy navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     alignItems: "center",
//     justifyContent: "center",
//   },

// });
