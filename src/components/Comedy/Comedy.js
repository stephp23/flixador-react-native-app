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
import styles from "./styleComedy";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Comedy = () => {
  const [comedy, setComedy] = useState([]);
  const fetchComedy = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${config.APIKEY}&with_genres=35`;
    let response = await axios.get(URL);
    setComedy(response.data.results);
  };

  useEffect(() => {
    fetchComedy();
  }, []);
  return (
    <View style={styles.row1}>
      <Text style={styles.text}>Comedy</Text>

      <View style={styles.row_posters}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {comedy.map((moviesComedy, index) => {
            return (
              <TouchableHighlight
                onPress={() => console.log(moviesComedy.id)}
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
                  source={{ uri: `${imgUrl}${moviesComedy.poster_path}` }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Comedy;