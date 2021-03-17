import React, { useState, useEffect } from "react";
import config from "../../../config";
import axios from "axios";

import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styleNewReleases";
const imgUrl = "https://image.tmdb.org/t/p/original";
const NewReleases = () => {
  const [newRelease, setNewRelease] = useState([]);
  const fetchNewRelease = async () => {
    let URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${config.APIKEY}&language=en-US`;
    let response = await axios.get(URL);
    setNewRelease(response.data.results);
  };

  useEffect(() => {
    fetchNewRelease();
  }, []);
  return (
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
          {newRelease.map((moviesNewReleses, index) => {
            return (
              <Image
                key={index}
                style={{ transform: "scale: 4.1" }}
                style={styles.row_poster}
                source={{ uri: `${imgUrl}${moviesNewReleses.poster_path}` }}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default NewReleases;
