import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row1: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 2,
    color: "white",
  },
  row_posters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
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
});

export default styles;
