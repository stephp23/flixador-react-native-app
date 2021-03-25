import React from "react";
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');
// import "./styleTeam";


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

// const Team = () => {
//   return (

//     <View>
//       <ScrollView>
//         <Text style={styles.text}>
//           Leesel Fraser
//       </Text>
//         <Image
//           style={styles.row_poster}
//           source={require('../../../assets/leesel.png')}
//         />
//         <Text style={styles.text}>
//           Stephanie Pena
//       </Text>
//         <Image
//           style={styles.row_poster}
//           source={require('../../../assets/stephanie.png')}
//         />
//         <Text style={styles.text}>
//           Katherine Fernandez
//       </Text>
//         <Image
//           style={styles.row_poster}
//           source={require('../../../assets/katherine.png')}
//         />
//         <Text style={styles.text}>
//           Ayman Gebril
//       </Text>
//         <Image
//           style={styles.row_poster}
//           source={require('../../../assets/ayman.png')}
//         />
//       </ScrollView>
//     </View>
//   )
// };

// export default Team;

const data = [
  'https://i.redd.it/bjqhu3ax2cz01.jpg',
  'https://graffiti-artist.net/wp-content/uploads/2019/02/nyc-graffiti-expedia.jpg',
  'https://assets.mycast.io/posters/adventures-in-babysitting-2022-fan-casting-poster-24041-large.jpg?1577835849',
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/add637105058085.5f70f03e2a6c0.png'

];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar hidden />
      <View
        style={StyleSheet.absoluteFillObject}
      >
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * width, // next
            index * width, // current
            (index + 1) * width // prev
          ]
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })
          return <Animated.Image
            key={`image-${index}`}
            source={{ uri: image }}
            style={[
              StyleSheet.absoluteFillObject,
              {
                opacity
              }
            ]}
            blurRadius={50}
          />
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: item }} style={{
              width: imageW,
              height: imageH,
              resizeMode: 'cover',
              borderRadius: 16,

            }} />
          </View>
        }}
      />
    </View>
  );
};
