import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";
import styles from "./styleTvShows";
import Search from "../../components/Banar/Search/Search";
import { useSelector } from "react-redux";

const imgUrl = "https://image.tmdb.org/t/p/original";
const TvShows = ({ navigation, navigation: { navigate }, dark, setDark }) => {
  const movies = useSelector((state) => state.movies.movies);
  const text = useSelector((state) => state.movies.text);
  return (
    <View>
      <View style={styles.searchIcon}>
        <Search />
      </View>
      {movies ? (
        <View style={styles.row1}>
          <Text style={styles.text}>{text ? `Results Of : ${text}` : ""}</Text>

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

      {/**  your code will go here  */}
    </View>
  );
};

export default TvShows;

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
