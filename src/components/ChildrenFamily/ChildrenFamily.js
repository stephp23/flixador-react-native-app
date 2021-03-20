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
import styles from "./styleChildrenFamily";
const imgUrl = "https://image.tmdb.org/t/p/original";
const ChildrenFamily = () => {
  const [childrenFamily, setChildrenFamily] = useState([]);
  const fetchChildrenFamily = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${config.APIKEY}&with_genres=10749`;
    let response = await axios.get(URL);
    setChildrenFamily(response.data.results);
  };

  useEffect(() => {
    fetchChildrenFamily();
  }, []);
  return (
    <View style={styles.row1}>
      <Text style={styles.text}>Children & Family</Text>

      <View style={styles.row_posters}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {childrenFamily.map((moviesChildrenFamily, index) => {
            return (
              <TouchableHighlight
                onPress={() => console.log(moviesChildrenFamily.id)}
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
                  source={{ uri: `${imgUrl}${moviesChildrenFamily.poster_path}` }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ChildrenFamily;