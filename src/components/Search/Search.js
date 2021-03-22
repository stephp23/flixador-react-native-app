import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
const { width } = Dimensions.get("window");
const Search = () => {
  const onSearch = () => {
    alert("ayman");
  };
  return (
    <View style={styles.root}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.buttonSearch} onPress={onSearch}>
        <View style={styles.buttonIconView}>
          <Icon name="search" style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    width: 0,
    height: 50,
    backgroundColor: "#999",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 53,
    borderRadius: 30,
    marginTop: 5,
  },
  buttonSearch: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    right: 0,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIconView: {},
  buttonIcon: {
    color: "white",
    fontSize: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#999",
    width: 0,
    borderRadius: 30,
    marginRight: 60,
    marginLeft: 20,
    color: "white",
    fontSize: 18,
  },
});
