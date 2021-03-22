import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import config from "../../../config";
import axios from "axios";
import Nav from "../components/Nav/Nav";


const imgUrl = "https://image.tmdb.org/t/p/original";

const Movies = () => {

  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);

  const [moviesPagesRow1, setMoviesPagesRow1] = useState([]);

  const [show, setShow] = useState(true);

  const fetchMoviesPageRow1 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=28`;
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
    <View style={styles.root}>
      <Text>this is movies</Text>
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
