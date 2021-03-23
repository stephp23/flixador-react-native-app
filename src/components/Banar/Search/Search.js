import React, { useState } from "react";
import { searchMovie, fetchMovies } from "../../../actions/searchActions";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { Container, Input, BoxButtonSearch, SearchIcon } from "./StyleSearch";

const Search = ({ searchMovie, fetchMovies }) => {
  const animation = new Animated.Value(60);
  const { width } = Dimensions.get("window");
  const movies = useSelector((state) => state.movies.movies);
  const text = useSelector((state) => state.movies.text);

  const handlePressIn = (val) => {
    fetchMovies(text);
  };
  const handlePress = () => {
    Animated.spring(animation, {
      toValue: 320,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Container style={{ width: animation }}>
      <Input autoFocus onChangeText={(val) => searchMovie(val)} />

      <BoxButtonSearch onPressIn={handlePressIn} onPress={handlePress}>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
};
const mapState = (state) => ({
  text: state.movies.text,
});

export default connect(mapState, { searchMovie, fetchMovies })(Search);
