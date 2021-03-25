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
    fontSize: 22,
    marginBottom: 20,
    marginTop: 20,
  },
  textDark: {
    color: "white",
    marginLeft: 20,
    fontSize: 22,
    marginBottom: 20,
    marginTop: 20,
  },
  switchButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  btweenBtn: {
    marginTop: -15,
  },
});

export default styles;
