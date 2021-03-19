import React, { useState, useEffect } from "react";
import config from "../../../config";
import axios from "axios";
import {
  ImageBackground,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";

const Banar = () => {
  const [banar, setBanar] = useState([]);
  const [banartrailerUrl, setBanarTrailerUrl] = useState("");
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
  console.log(banar);
  const image = {
    uri: `https://image.tmdb.org/t/p/original${banar?.backdrop_path}`,
  };
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={{ width: "100%", height: 520 }}
      ></ImageBackground>
      {/* <Image
        resizeMode="cover"
        style={{
          width: "100%",
          height: 520,
          //   ,
          padding: 0,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/original${banar?.backdrop_path}`,
        }}
      /> */}
    </View>
  );
};

export default Banar;
