import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";
import config from "../../../config";
import axios from "axios";
import ButtonStyle from "../Banar/ButtonStyle/ButtonStyle";
import { LinearGradient } from "expo-linear-gradient";
const imgUrl = "https://image.tmdb.org/t/p/original";
const FullTvShow = ({ route: { params }, navigation: { navigate } }) => {
  const { id } = params;
  const [fullTvShowBanar, setFullTvShowBanar] = useState([]);
  const [similarTvShow, setSimilarTvShow] = useState([]);
  const [fulltrailerUrl, setfullTrailerUrl] = useState("");

  const fetchFullTvShow = async () => {
    let URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${config.APIKEY}&language=en-US`;
    const response = await axios.get(URL);
    setFullTvShowBanar(response.data);
  };

  const fetchSimilarTv = async () => {
    let urlSimilar = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${config.APIKEY}&language=en-US&page=1`;
    const response = await axios.get(urlSimilar);
    setSimilarTvShow(response.data.results);
  };

  useEffect(() => {
    fetchSimilarTv();
  }, []);

  useEffect(() => {
    fetchFullTvShow();
  }, [fullTvShowBanar]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClickMovie = (fullTvShowBanar) => {
    if (fulltrailerUrl) {
      setfullTrailerUrl("");
    } else {
      movieTrailer(
        fullTvShowBanar?.name ||
          fullTvShowBanar?.title ||
          fullTvShowBanar?.orignal_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setfullTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Temporary Unavailable"));
    }
  };
  const image = {
    uri: `https://image.tmdb.org/t/p/original${fullTvShowBanar?.backdrop_path}`,
  };
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={{
          height: "auto",
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={120}
        decelerationRate="fast"
        pagingEnabled
      >
        <ImageBackground
          resizeMode="cover"
          source={image}
          style={{
            height: 450,
            width: 375,
          }}
        >
          <LinearGradient
            locations={[0, 1.0]}
            colors={["rgba(0,0,0,0.00)", "rgba(0,0,0,0.80)"]}
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 118,
            }}
          />
          <View style={styles.banarinfo}>
            <Text style={styles.title}>
              {fullTvShowBanar?.title ||
                fullTvShowBanar?.name ||
                fullTvShowBanar?.orignal_name}
            </Text>
          </View>

          <View tyle={styles.banarbuttons}>
            <ButtonStyle
              text="Play"
              color="rgba(51, 51, 51, 0.5)"
              onPress={() => handleClickMovie()}
            />
          </View>
        </ImageBackground>
        <View>
          <Text style={styles.subjact}>
            {fullTvShowBanar?.title ||
              fullTvShowBanar?.name ||
              fullTvShowBanar?.orignal_name}
          </Text>
          <Text style={styles.description}>
            Run Time : {fullTvShowBanar.runtime} min
          </Text>
          <Text style={styles.description}>
            {" "}
            {fullTvShowBanar.release_date}
          </Text>
          <Text style={styles.description}>
            {truncate(fullTvShowBanar?.overview, 300)}
          </Text>
        </View>
        <View style={styles.similarView}>
          <Text style={styles.similarText}> Similar Tv Shows</Text>
        </View>
        <View style={styles.row1}>
          <View style={styles.row_posters}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={120}
              decelerationRate="slow"
              pagingEnabled
            >
              {similarTvShow.map((similarTvShows, index) => {
                return (
                  <TouchableHighlight
                    onPress={() => navigate("TvShow", similarTvShows)}
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
                      source={{ uri: `${imgUrl}${similarTvShows.poster_path}` }}
                    />
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FullTvShow;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingLeft: 40,
    marginTop: 200,
    marginRight: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 9.8,
  },
  subjact: {
    margin: 20,
    fontSize: 20,
  },
  description: {
    margin: 10,
    fontSize: 15,
  },
  similarView: {
    margin: 18,
  },
  similarText: {
    fontSize: 18,
  },
  row1: {
    marginLeft: 0,
    fontWeight: "bold",
    // fontSize: 2,
    color: "white",
    height: 400,
  },
  row_posters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    margin: 5,
  },
  row_poster: {
    resizeMode: "contain",
    height: 230,
    width: 150,
    marginRight: 10,
    borderRadius: 28,
  },
});
