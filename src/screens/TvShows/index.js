import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";
import config from "../../../config";
import axios from "axios";
import styles from "./styleTVShows";
import Search from "../../components/Banar/Search/Search";
import { useSelector } from "react-redux";

const imgUrl = "https://image.tmdb.org/t/p/original";

const TvShows = ({ navigation, navigation: { navigate } }) => {
  const movies = useSelector((state) => state.movies.movies);
  const text = useSelector((state) => state.movies.text);

  const [tvShowsPagesRow1, setTvShowsPagesRow1] = useState([]);
  const [tvShowsPagesRow2, setTvShowsPagesRow2] = useState([]);
  const [tvShowsPagesRow3, setTvShowsPagesRow3] = useState([]);
  const [tvShowsPagesRow4, setTvShowsPagesRow4] = useState([]);
  const [tvShowsPagesRow5, setTvShowsPagesRow5] = useState([]);

  const fetchTVShowsPagesRow1 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${config.APIKEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow1(response.data.results);
  };

  const fetchTVShowsPagesRow2 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${config.APIKEY}&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow2(response.data.results);
  };

  const fetchTVShowsPagesRow3 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${config.APIKEY}&language=en-US&sort_by=popularity.desc&page=3&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow3(response.data.results);
  };

  const fetchTVShowsPagesRow4 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${config.APIKEY}&language=en-US&sort_by=popularity.desc&page=4&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow4(response.data.results);
  };

  const fetchTVShowsPagesRow5 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${config.APIKEY}&language=en-US&sort_by=popularity.desc&page=5&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow5(response.data.results);
  };

  useEffect(() => {
    fetchTVShowsPagesRow1();
    fetchTVShowsPagesRow2();
    fetchTVShowsPagesRow3();
    fetchTVShowsPagesRow4();
    fetchTVShowsPagesRow5();
  }, []);

  return (
    <View>
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={120}
        decelerationRate="fast"
        pagingEnabled
      >
        <View style={styles.searchIcon}>
          <Search />
        </View>

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

        <View style={styles.row1}>
          <Text style={styles.text}>TV Shows Row 1</Text>

          <View style={styles.row_posters}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={120}
              decelerationRate="slow"
              pagingEnabled
            >
              {tvShowsPagesRow1.map((tvShowsRow1, index) => {
                return (
                  <TouchableHighlight
                    onPress={() => navigate("TvShow", tvShowsRow1)}
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
                      source={{ uri: `${imgUrl}${tvShowsRow1.poster_path}` }}
                    />
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </View>

        <View style={styles.row1}>
          <Text style={styles.text}>TV Shows Row 2</Text>

          <View style={styles.row_posters}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={120}
              decelerationRate="slow"
              pagingEnabled
            >
              {tvShowsPagesRow2.map((tvShowsRow2, index) => {
                return (
                  <TouchableHighlight
                    onPress={() => navigate("TvShow", tvShowsRow2)}
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
                      source={{ uri: `${imgUrl}${tvShowsRow2.poster_path}` }}
                    />
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </View>

        <View style={styles.row1}>
          <Text style={styles.text}>TV Shows Row 3</Text>

          <View style={styles.row_posters}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={120}
              decelerationRate="slow"
              pagingEnabled
            >
              {tvShowsPagesRow3.map((tvShowsRow3, index) => {
                return (
                  <TouchableHighlight
                    onPress={() => navigate("TvShow", tvShowsRow3)}
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
                      source={{ uri: `${imgUrl}${tvShowsRow3.poster_path}` }}
                    />
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </View>

        <View style={styles.row1}>
          <Text style={styles.text}>TV Shows Row 4</Text>

          <View style={styles.row_posters}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={120}
              decelerationRate="slow"
              pagingEnabled
            >
              {tvShowsPagesRow4.map((tvShowsRow4, index) => {
                return (
                  <TouchableHighlight
                    onPress={() => navigate("TvShow", tvShowsRow4)}
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
                      source={{ uri: `${imgUrl}${tvShowsRow4.poster_path}` }}
                    />
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </View>

        <View style={styles.row1}>
          <Text style={styles.text}>TV Shows Row 5</Text>

          <View style={styles.row_posters}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={120}
              decelerationRate="slow"
              pagingEnabled
            >
              {tvShowsPagesRow5.map((tvShowsRow5, index) => {
                return (
                  <TouchableHighlight
                    onPress={() => navigate("TvShow", tvShowsRow5)}
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
                      source={{ uri: `${imgUrl}${tvShowsRow5.poster_path}` }}
                    />
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
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
