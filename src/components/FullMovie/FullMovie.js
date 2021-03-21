import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import config from "../../../config";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

import movieTrailer from "movie-trailer";
import { useSelector } from "react-redux";
const FullMovie = ({ route: { params } }) => {
  const { id } = params;
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
  }, [fullMoviebanar]);
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
    <View>
      <Image
        resizeMode="contian"
        source={image}
        style={{
          height: 450,
          width: 375,
        }}
      />
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
});
