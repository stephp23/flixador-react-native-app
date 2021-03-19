import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row1: {
    marginLeft: 0,
    fontWeight: "bold",
    // fontSize: 2,
    color: "white",
    paddingTop: 20,
  },
  row_posters: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-evenly",
    //  justifyContent: "space",
    // overflow: "hidden",
    // margin: 0 - 20 - 10,
    margin: 0 - 20,
  },
  row_poster: {
    resizeMode: "contain",
    height: 180,
    width: 130,

    borderRadius: 40,
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
