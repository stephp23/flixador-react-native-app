import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row1: {
    marginLeft: 0,
    fontWeight: "bold",
    // fontSize: 2,
    color: "white",
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

  text: {
    color: "#111",
    marginLeft: 20,
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
  },
});

export default styles;