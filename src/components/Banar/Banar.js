import React, { useState, useEffect } from "react";
import config from "../../../config";
import styled from "styled-components/native";
import axios from "axios";
import {
  ImageBackground,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styleBanar";

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

  const Gradient = styled(LinearGradient)`
    height: 100%;
  `;

  const image = {
    uri: `https://image.tmdb.org/t/p/original${banar?.backdrop_path}`,
  };
  return (
    <View style={styles.banar}>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={{
          width: "100%",
          height: 450,
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
            {banar?.title || banar?.name || banar?.orignal_name}
          </Text>
        </View>

        <View tyle={styles.banarbuttons}></View>
      </ImageBackground>

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
