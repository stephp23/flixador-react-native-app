import React, { useState, useEffect } from "react";
import axios from "axios";

import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styleNewReleases";
const imgUrl = "https://image.tmdb.org/t/p/original";
const NewReleases = () => {
  const [newRelease, setNewRelease] = useState([]);
  const fetchNewRelease = async () => {
    let URL = `https://api.themoviedb.org/3/trending/all/week?api_key=db4b083428c5e3032dba92c507c8e1cc&language=en-US`;
    let response = await axios.get(URL);
    setNewRelease(response.data.results);
  };

  console.log(newRelease);
  useEffect(() => {
    fetchNewRelease();
  }, []);
  return (
    <View style={styles.row1}>
      <Text>New Releases</Text>
      <View style={styles.row_posters}>
        <ScrollView
          horizontal={true}
          //   contentContainerStyle={{ width: `${100}%` }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {newRelease.map((moviesNewReleses) => {
            return (
              <Image
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
