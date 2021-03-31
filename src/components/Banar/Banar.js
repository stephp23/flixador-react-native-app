import React, { useState, useEffect, useRef } from "react";
import config from "../../../config";
import movieTrailer from "movie-trailer";
import axios from "axios";
import ButtonStyle from "./ButtonStyle/ButtonStyle";
import { ImageBackground, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styleBanar";
import Search from "./Search/Search";
import { WebView } from "react-native-webview";

const Banar = () => {
  const [banar, setBanar] = useState([]);
  const [fulltrailerUrl, setfullTrailerUrl] = useState("");
  const handelBaner = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${config.APIKEY}&with_networks=213`
    );

    setBanar(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ]
    );
    return response;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handelBaner();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleClickMovie = (banar) => {
    const string = banar?.title || banar?.name || banar?.orignal_name || "";

    const response = movieTrailer(string.toString())
      .then((res) => setfullTrailerUrl(res))
      .catch((error) => console.log(error));

    return response;
  };

  const image = {
    uri: `https://image.tmdb.org/t/p/original${banar?.backdrop_path}`,
  };

  return (
    // <View style={styles.banar}>
    <View>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={{
          height: 450,
          width: 375,
        }}
      >
        <View style={styles.search}>
          <Search />
        </View>
        <View style={styles.viewInfo}>
          <View style={styles.banarinfo}>
            <Text style={styles.title}>
              {banar?.title || banar?.name || banar?.orignal_name}
            </Text>
          </View>

          <View tyle={styles.banarbuttons}>
            <ButtonStyle
              text="Play"
              color="rgba(51, 51, 51, 0.5)"
              onPress={() => handleClickMovie(banar)}
            />
            <Text style={styles.banarDescription}>
              {truncate(banar?.overview, 150)}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <LinearGradient
        locations={[0, 1.0]}
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.80)"]}
        style={{
          position: "absolute",
          bottom: -4,
          width: "100%",
          height: 118,
        }}
      />
      {fulltrailerUrl.length > 0 && (
        <WebView
          containerStyle={{ marginTop: 20 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `${fulltrailerUrl ? fulltrailerUrl : ""}` }}
          style={{ height: 260, width: 380, backgroundColor: "black" }}
        />
      )}
    </View>
  );
};

export default Banar;
