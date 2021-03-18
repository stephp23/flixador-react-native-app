import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ChildrenFamily from "../../components/ChildrenFamily/ChildrenFamily";
import NewReleases from "../../components/NewReleases/NewReleases";
import ScifiHorror from "../../components/ScifiHorror/ScifiHorror";
import TopRatedMov from "../../components/TopRatedMov/TopRatedMov";

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
        <TopRatedMov />
        <ScifiHorror />
        <ChildrenFamily />
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
