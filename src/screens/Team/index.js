import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import '../../images/homeiconred';


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

const Team = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('@expo/src/images/homeiconred.png')}
      />
    </View>
  )
};



export default Team;


