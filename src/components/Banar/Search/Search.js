// import React from "react";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   TextInput,
//   Animated,
// } from "react-native";
// const { width } = Dimensions.get("window");
// const animation = new Animated.Value(60);
// const Search = () => {
//   const onSearch = () => {
//     alert("ayman");
//     Animated.spring(animation, {
//       toValue: width * 0.7,
//       useNativeDriver: false,
//     }).start();
//   };
//   return (
//     <Animated.View style={styles.root} style={{ width: animation }}>
//       <TextInput style={styles.input} autoFocus />
//       <TouchableOpacity style={styles.buttonSearch} onPress={onSearch}>
//         <View style={styles.buttonIconView}>
//           <Icon name="search" style={styles.buttonIcon} />
//         </View>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// };

// export default Search;

// const styles = StyleSheet.create({
//   root: {
//     // width: animation,
//     // height: 80,
//     backgroundColor: "#999",
//     alignItems: "center",
//     alignContent: "center",
//     marginLeft: 53,
//     borderRadius: 30,
//     marginTop: 10,
//   },
//   buttonSearch: {
//     width: 50,
//     height: 50,
//     backgroundColor: "red",
//     position: "absolute",
//     right: 0,
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonIconView: {},
//   buttonIcon: {
//     color: "white",
//     fontSize: 20,
//   },
//   input: {
//     flex: 1,
//     backgroundColor: "blue",
//     width: 60,
//     borderRadius: 30,
//     marginRight: 80,
//     marginLeft: 20,
//     color: "white",
//     fontSize: 18,
//   },
// });

import React from "react";

import { Dimensions, Animated, TouchableWithoutFeedback } from "react-native";
import { Container, Input, BoxButtonSearch, SearchIcon } from "./StyleSearch";

export default function SearchBar() {
  const animation = new Animated.Value(60);
  const { width } = Dimensions.get("window");

  const handlePressIn = () => {
    alert("hellooo");
  };
  const handlePress = () => {
    Animated.spring(animation, {
      toValue: 320,
      useNativeDriver: false,
    }).start();
    alert("ayman");
  };

  return (
    <Container style={{ width: animation }}>
      <Input autoFocus />

      <BoxButtonSearch onPressIn={handlePressIn} onPress={handlePress}>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
}
