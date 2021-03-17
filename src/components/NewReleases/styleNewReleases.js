import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row1: {
    marginLeft: 2,
    fontWeight: "bold",
    fontSize: 2,
    color: "white",
  },
  row_posters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    margin: 10,
  },
  row_poster: {
    height: 200,
    width: 150,
    maxHeight: 400,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  text: {
    fontSize: 25,
    marginBottom: 20,
    // fontWeight: "bold",
  },
});

export default styles;
