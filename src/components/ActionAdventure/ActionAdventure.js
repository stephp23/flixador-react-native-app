import React, { useState, useEffect } from "react";
import config from "../../../config";
import axios from "axios";

import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styleActionAdventure";
const imgUrl = "https://image.tmdb.org/t/p/original";

const ActionAdventure = () => {
  const [actionAdventureMovies, setActionAdventureMovies] = useState([]);
  const fetchActionAdventureMovies = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${config.APIKEY}&with_genres=28`;
    let response = await axios.get(URL);
    setActionAdventureMovies(response.data.results);
  };

  useEffect(() => {
    fetchActionAdventureMovies();
  }, []);
  return (
    <View style={styles.row1}>
      <Text style={styles.text}>Action and Adventure</Text>

      <View style={styles.row_posters}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {actionAdventureMovies.map((moviesActionAdventure, index) => {
            return (
              <Image
                key={index}
                style={{ transform: "scale: 4.1" }}
                style={styles.row_poster}
                source={{ uri: `${imgUrl}${moviesActionAdventure.poster_path}` }}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ActionAdventure;
