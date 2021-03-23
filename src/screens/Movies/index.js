import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import config from "../../../config";
import axios from "axios";
import styles from "./styleMovies";
import Search from "../../components/Banar/Search/Search";
import { useSelector } from "react-redux";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Movies = ({ navigation: { navigate } }) => {
  const movies = useSelector((state) => state.movies.movies);
  const text = useSelector((state) => state.movies.text);

  const [moviesPagesRow1, setMoviesPagesRow1] = useState([]);
  const [moviesPagesRow2, setMoviesPagesRow2] = useState([]);
  const [moviesPagesRow3, setMoviesPagesRow3] = useState([]);
  const [moviesPagesRow4, setMoviesPagesRow4] = useState([]);
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

  const fetchMoviesPageRow3 = async () => {
    let URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${config.APIKEY}&language=en-US&page=2`;
    const response = await axios.get(URL);
    setMoviesPagesRow3(response.data.results);
  };

  const fetchMoviesPageRow4 = async () => {
    let URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${config.APIKEY}&language=en-US&page=3`;
    const response = await axios.get(URL);
    setMoviesPagesRow4(response.data.results);
  };

  useEffect(() => {
    fetchMoviesPageRow1();
    fetchMoviesPageRow2();
    fetchMoviesPageRow3();
    fetchMoviesPageRow4();
  }, []);

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

      <View style={styles.row1}>
        <Text style={styles.text}>Upcomingpage1 Movies</Text>
        
        <View style={styles.row_posters}>
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
                  style={styles.row_poster}
                  source={{ uri: `${imgUrl}${moviesRow2.poster_path}` }}
                  />
                </TouchableHighlight>
              );
            })}
          </ScrollView>
        </View>
      </View>

      <View style={styles.row1}>
        <Text style={styles.text}>Upcomingpage2 Movies</Text>

        <View style={styles.row_posters}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{}}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={120}
            decelerationRate="slow"
            pagingEnabled 
          >
            {moviesPagesRow3.map((moviesRow3, index) => {
              return (
                <TouchableHighlight
                  onPress={() => navigate("movie", moviesRow3)}
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
                  source={{ uri: `${imgUrl}${moviesRow3.poster_path}` }}
                  />
                </TouchableHighlight>
              );
            })}
          </ScrollView>
        </View>
      </View>

      <View style={styles.row1}>
        <Text style={styles.text}>Upcomingpage3 Movies</Text>
        
        <View style={styles.row_posters}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{}}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={120}
            decelerationRate="slow"
            pagingEnabled 
          >
            {moviesPagesRow4.map((moviesRow4, index) => {
              return (
                <TouchableHighlight
                  onPress={() => navigate("movie", moviesRow4)}
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
                  source={{ uri: `${imgUrl}${moviesRow4.poster_path}` }}
                  />
                </TouchableHighlight>
              );
            })}
          </ScrollView>
        </View>
      </View>




      
    </View>
  );
};

export default Movies;
