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
import styles from "./styleScifiHorror";
const imgUrl = "https://image.tmdb.org/t/p/original";
const ScifiHorror = ({ navigation: { navigate } }) => {
  const [scifiHorror, setScifiHorror] = useState([]);
  const fetchScifiHorror = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${config.APIKEY}&with_networks=213`;
    let response = await axios.get(URL);
    setScifiHorror(response.data.results);
  };

  useEffect(() => {
    fetchScifiHorror();
  }, []);
  return (
    <View style={styles.row1}>
      <Text style={styles.text}>Scifi & Horror</Text>

      <View style={styles.row_posters}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={120}
          decelerationRate="slow"
          pagingEnabled
        >
          {scifiHorror.map((moviesScifiHorror, index) => {
            return (
              <TouchableHighlight
                onPress={() => navigate("movie", moviesScifiHorror)}
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
                  source={{ uri: `${imgUrl}${moviesScifiHorror.poster_path}` }}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ScifiHorror;
