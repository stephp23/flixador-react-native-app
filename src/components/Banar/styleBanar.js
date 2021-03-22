import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  banar: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
  },
  banarinfo: {
    marginTop: -40,
    marginLeft: 40,
    paddingTop: 140,
    height: 190,
  },
  title: {
    marginTop: -50,
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    paddingBottom: 4.8,
  },
  banarDescription: {
    color: "white",
    width: "70%",
    marginLeft: 20,
    marginTop: 20,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  search: {
    left: 300,
    marginTop: 40,
  },
});

export default styles;
