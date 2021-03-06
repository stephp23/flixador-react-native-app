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
import styles from "./styleTopRatedMov";
const imgUrl = "https://image.tmdb.org/t/p/original";
const TopRatedMov = ({ navigation: { navigate } }) => {
  const dark = useTheme();
  const [topRatedMov, setTopRatedMov] = useState([]);
  const fetchTopRatedMov = async () => {
    let URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${config.APIKEY}&language=en-US&page=1`;
    let response = await axios.get(URL);
    setTopRatedMov(response.data.results);
  };

  useEffect(() => {
    fetchTopRatedMov();
  }, []);
  return (
    <View style={styles.row1}>
      <Text style={dark ? styles.textDark : styles.text}>Top Rated Movies</Text>

      <View style={styles.row_posters}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {topRatedMov.map((topRatedMov, index) => {
            return (
              <TouchableHighlight
                onPress={() => navigate("movie", topRatedMov)}
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
                  source={{ uri: `${imgUrl}${topRatedMov.poster_path}` }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default TopRatedMov;
