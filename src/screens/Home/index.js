import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import NewReleases from "../../components/NewReleases/NewReleases";

const Home = () => {
  return (
    <View style={styles.root}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={120}
        decelerationRate="fast"
        pagingEnabled
      >
        <NewReleases />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 300,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
