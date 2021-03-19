import React, { useState, useEffect } from "react";
import config from "../../../config";
import axios from "axios";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import styles from "./styleBanar";

const Banar = () => {
  const [banar, setBanar] = useState([]);
  const [banartrailerUrl, setBanarTrailerUrl] = useState("");
  const handelBaner = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&with_networks=213`
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

  // const Poster =

  return (
    <View>
      <Text>HEY</Text>
    </View>
  );
};

export default Banar;
