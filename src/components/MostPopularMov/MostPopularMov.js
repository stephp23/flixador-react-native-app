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
import styles from "./styleMostPopularMov";
const imgUrl = "https://image.tmdb.org/t/p/original";
const MostPopularMov = () => {
  const [mostPopularMov, setMostPopularMov] = useState([]);
  const fetchMostPopularMov = async () => {
    let URL = `https://api.themoviedb.org/3/movie/popular?api_key=${config.APIKEY}&language=en-US&page=1`;
    let response = await axios.get(URL);
    setMostPopularMov(response.data.results);
  };

  useEffect(() => {
    fetchMostPopularMov();
  }, []);
  return (
    <View style={styles.row1}>
      <Text style={styles.text}>Most Popular Movies</Text>

      <View style={styles.row_posters}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {mostPopularMov.map((moviesMostPopular, index) => {
            return (
              <TouchableHighlight
                onPress={() => console.log(moviesMostPopular.id)}
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
                  source={{ uri: `${imgUrl}${moviesMostPopular.poster_path}` }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default MostPopularMov;
