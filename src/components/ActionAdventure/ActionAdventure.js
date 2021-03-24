import React, { useState, useEffect } from "react";
import config from "../../../config";
import axios from "axios";
import { useTheme } from "../../DarkMood";

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import styles from "./styleActionAdventure";
const imgUrl = "https://image.tmdb.org/t/p/original";

const ActionAdventure = ({ navigation: { navigate } }) => {
  const dark = useTheme();
  console.log(dark);
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
      <Text style={dark ? styles.textDark : styles.text}>
        Action and Adventure
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
          {actionAdventureMovies.map((moviesActionAdven, index) => {
            return (
              <TouchableHighlight
                onPress={() => navigate("movie", moviesActionAdven)}
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
                  source={{ uri: `${imgUrl}${moviesActionAdven.poster_path}` }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ActionAdventure;
