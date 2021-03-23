import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from "react-native";
import config from "../../../config";
import axios from "axios";
import styles from "./styleMovies";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Movies = ({ navigation: { navigate } }) => {
  const [moviesPagesRow1, setMoviesPagesRow1] = useState([]);
  const [moviesPagesRow2, setMoviesPagesRow2] = useState([]);
  const [show, setShow] = useState(true);

  const fetchMoviesPageRow1 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${config.APIKEY}&with_genres=28`;
    const response = await axios.get(URL);
    setMoviesPagesRow1(response.data.results);
  };

  const fetchMoviesPageRow2 = async () => {
    let URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${config.APIKEY}&language=en-US&page=1`;
    const response = await axios.get(URL);
    setMoviesPagesRow2(response.data.results);
  };

  useEffect(() => {
    fetchMoviesPageRow1();
    fetchMoviesPageRow2();
  }, []);


  return (
    <View style={styles.row2}>
      <Text style={styles.text}>ActionAdventure Movies</Text>

      <View style={styles.row_posters2}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {moviesPagesRow1.map((moviesRow1, index) => {
            return (
              <TouchableHighlight
                onPress={() => navigate("movie", moviesRow1)}
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
                style={styles.row_poster2}
                source={{ uri: `${imgUrl}${moviesRow1.poster_path}` }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
      <Text style={styles.text}>Upcomingpage1 Movies</Text>

      <View style={styles.row_posters2}>
      <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {moviesPagesRow2.map((moviesRow2, index) => {
            return (
              <TouchableHighlight
                onPress={() => navigate("movie", moviesRow2)}
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
                style={styles.row_poster2}
                source={{ uri: `${imgUrl}${moviesRow2.poster_path}` }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Movies;
