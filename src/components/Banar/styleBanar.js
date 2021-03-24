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
    paddingTop: 150,
    height: 120,
    fontSize: 15,
  },
  title: {
    marginTop: -30,
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    paddingBottom: 1.8,
    width: "90%",
  },
  banarDescription: {
    color: "white",
    width: "70%",
    marginLeft: 20,
    marginTop: 10,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  search: {
    left: 20,
    marginTop: 50,
  },
});

export default styles;
