import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";
import config from "../../../config";
import axios from "axios";
import ButtonStyle from "../Banar/ButtonStyle/ButtonStyle";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../DarkMood";

import movieTrailer from "movie-trailer";
import { useSelector } from "react-redux";
const imgUrl = "https://image.tmdb.org/t/p/original";
const FullMovie = ({ route: { params }, navigation: { navigate } }) => {
  const { id } = params;
  const dark = useTheme();
  const [fullMoviebanar, setFullMoviebanar] = useState([]);
  const [fulltrailerUrl, setfullTrailerUrl] = useState("");
  const [similarMovie, SetsimilarMovie] = useState([]);
  const fetchFullMovie = async () => {
    let URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.APIKEY}`;
    const response = await axios.get(URL);
    setFullMoviebanar(response.data);
  };

  const fetchSimilarMovie = async () => {
    let urlSimilar = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${config.APIKEY}&language=en-US&page=1`;
    const response = await axios.get(urlSimilar);
    SetsimilarMovie(response.data.results);
  };

  useEffect(() => {
    fetchSimilarMovie();
  }, []);
  useEffect(() => {
    fetchFullMovie();
  }, [fullMoviebanar]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const handleClickMovie = (fullMoviebanar) => {
    if (fulltrailerUrl) {
      setfullTrailerUrl("");
    } else {
      movieTrailer(
        fullMoviebanar?.name ||
          fullMoviebanar?.title ||
          fullMoviebanar?.orignal_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setfullTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Temporary Unavailable"));
    }
  };
  const image = {
    uri: `https://image.tmdb.org/t/p/original${fullMoviebanar?.backdrop_path}`,
  };

  return (
    <View style={dark ? styles.rootDark : styles.root}>
      <ScrollView
        contentContainerStyle={{
          height: "auto",
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={120}
        decelerationRate="fast"
        pagingEnabled
      >
        <ImageBackground
          resizeMode="cover"
          source={image}
          style={{
            height: 450,
            width: 375,
          }}
        >
          <LinearGradient
            locations={[0, 1.0]}
            colors={["rgba(0,0,0,0.00)", "rgba(0,0,0,0.80)"]}
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 118,
            }}
          />
          <View style={styles.banarinfo}>
            <Text style={styles.title}>
              {fullMoviebanar?.title ||
                fullMoviebanar?.name ||
                fullMoviebanar?.orignal_name}
            </Text>
          </View>

          <View tyle={styles.banarbuttons}>
            <ButtonStyle
              text="Play"
              color="rgba(51, 51, 51, 0.5)"
              onPress={() => handleClickMovie()}
            />
          </View>
        </ImageBackground>
        <View>
          <Text style={dark ? styles.subjactDark : styles.subjact}>
            {fullMoviebanar?.title ||
              fullMoviebanar?.name ||
              fullMoviebanar?.orignal_name}
          </Text>
          <Text style={dark ? styles.descriptionDark : styles.description}>
            Run Time : {fullMoviebanar.runtime} min
          </Text>
          <Text style={dark ? styles.descriptionDark : styles.description}>
            {" "}
            {fullMoviebanar.release_date}
          </Text>
          <Text style={dark ? styles.descriptionDark : styles.description}>
            {truncate(fullMoviebanar?.overview, 300)}
          </Text>
        </View>
        <View style={styles.similarView}>
          <Text style={dark ? styles.similarTextDark : styles.similarText}>
            {" "}
            Similar Movies
          </Text>
        </View>
        <View style={styles.row1}>
          <View style={styles.row_posters}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={120}
              decelerationRate="slow"
              pagingEnabled
            >
              {similarMovie.map((similarMovies, index) => {
                return (
                  <TouchableHighlight
                    onPress={() => navigate("movie", similarMovies)}
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
                      source={{ uri: `${imgUrl}${similarMovies.poster_path}` }}
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

export default FullMovie;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  rootDark: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingLeft: 40,
    marginTop: 200,
    marginRight: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 9.8,
  },
  subjact: {
    margin: 20,
    fontSize: 20,
  },
  subjactDark: {
    color: "white",
    margin: 20,
    fontSize: 20,
  },
  description: {
    margin: 10,
    fontSize: 15,
  },
  descriptionDark: {
    color: "white",
    margin: 10,
    fontSize: 15,
  },
  similarView: {
    margin: 18,
  },
  similarText: {
    fontSize: 18,
  },
  similarTextDark: {
    color: "white",
    fontSize: 18,
  },
  row1: {
    marginLeft: 0,
    fontWeight: "bold",
    // fontSize: 2,
    color: "white",
    height: 400,
  },
  row_posters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    margin: 5,
  },
  row_poster: {
    resizeMode: "contain",
    height: 230,
    width: 150,
    marginRight: 10,
    borderRadius: 28,
  },
});
