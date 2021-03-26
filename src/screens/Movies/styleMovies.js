import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  rootDark: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  searchIcon: {
    left: 20,
    marginTop: 50,
  },
  movieView: {
    marginTop: -80,
  },
  rowsearch: {
    marginLeft: 0,
    fontWeight: "bold",
    color: "white",
    marginBottom: 80,
  },
  row1: {
    marginLeft: 0,
    fontWeight: "bold",
    color: "white",
    marginTop: 30,
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
  textDark: {
    color: "white",
    marginLeft: 20,
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
  },
});

export default styles;
