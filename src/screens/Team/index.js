import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import styles from "./styleTeam";


// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   stretch: {
//     width: 50,
//     height: 200,
//     resizeMode: 'stretch',
//   },
// });

const Team = () => {
  return (

    <View>
      <ScrollView>
        <Text style={styles.text}>
          Leesel Fraser
      </Text>
        <Image
          style={styles.row_poster}
          source={require('../../../assets/leesel.png')}
        />
        <Text style={styles.text}>
          Stephanie Pena
      </Text>
        <Image
          style={styles.row_poster}
          source={require('../../../assets/stephanie.png')}
        />
        <Text style={styles.text}>
          Katherine Fernandez
      </Text>
        <Image
          style={styles.row_poster}
          source={require('../../../assets/katherine.png')}
        />
        <Text style={styles.text}>
          Ayman Gebril
      </Text>
        <Image
          style={styles.row_poster}
          source={require('../../../assets/ayman.png')}
        />
      </ScrollView>
    </View>
  )
};



export default Team;


