import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import config from "../../../config";
import { useSelector }from "react-redux";
import axios from "axios";



const imgUrl = "https://image.tmdb.org/t/p/original";

const Movies = ({ setGetMovieId, light }) => {
  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);
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

  useEffect(() => {
    const handleScrolling = window.addEventListener("scroll", () => {
      window.scrollY > -20 ? setShow(true) : setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <View style={styles.row1}>
      <Text style={styles.text}>Most Popular Movies</Text>

      <View style={styles.row_posters}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {moviesPagesRow1.map((moviesMostPopular, index) => {
            return (
              <Image
                key={index}
                style={{ transform: "scale: 4.1" }}
                style={styles.row_poster}
                source={{ uri: `${imgUrl}${moviesMostPopular.poster_path}` }}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
