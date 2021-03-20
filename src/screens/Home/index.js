import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Banar from "../../components/Banar/Banar";
import ChildrenFamily from "../../components/ChildrenFamily/ChildrenFamily";
import Comedy from "../../components/Comedy/Comedy";
import MostPopularMov from "../../components/MostPopularMov/MostPopularMov";
import NewReleases from "../../components/NewReleases/NewReleases";
import ScifiHorror from "../../components/ScifiHorror/ScifiHorror";
import TopRatedMov from "../../components/TopRatedMov/TopRatedMov";

const Home = () => {
  return (
    <View style={styles.root}>
      <ScrollView
      // contentContainerStyle={{}}
      // showsHorizontalScrollIndicator={false}
      // scrollEventThrottle={120}
      // decelerationRate="fast"
      // pagingEnabled
      >
        <Banar />
        <NewReleases />
        <TopRatedMov />
        <MostPopularMov />
        <Comedy />
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
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
