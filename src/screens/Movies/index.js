import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from "react-native";
import config from "../../../config";
import axios from "axios";
import styles from "./styleMovies";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Movies = ({ navigation: { navigate } }) => {
  const [moviesPagesRow1, setMoviesPagesRow1] = useState([]);
  const [show, setShow] = useState(true);

  const fetchMoviesPageRow1 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${config.APIKEY}&with_genres=28`;
    const response = await axios.get(URL);
    setMoviesPagesRow1(response.data.results);
  };

  useEffect(() => {
    fetchMoviesPageRow1();
  }, []);


  return (
    <View style={styles.row1}>
      <Text style={styles.text}>New Releases</Text>

      <View style={styles.row_posters}>
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
                style={styles.row_poster}
                source={{ uri: `${imgUrl}${moviesRow1.poster_path}` }}
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
