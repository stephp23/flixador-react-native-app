import React from "react";
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
// import "./styleTeam";

const { width, height } = Dimensions.get('screen');

const data = [
  {
    image: require('../../../assets/stephanie.png'),
    name: 'Stephanie Pena',
    role: 'Front End Web Developer'
  },
  {
    image: require('../../../assets/leesel.png'),
    name: 'Leesel Fraser',
    role: 'Fullstack Web Developer'
  },
  {
    image: require('../../../assets/ayman.png'),
    name: 'Ayman Gebril',
    role: 'Fullstack Web Developer'
  },
  {
    image: require('../../../assets/katherine.png'),
    name: 'Katherine Fernandez',
    role: 'Product Design'
  }
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
        {data.map(({ image }, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ]
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })
          return <Animated.Image
            key={`image-${index}`}
            source={image}
            style={[
              StyleSheet.absoluteFillObject,
              {
                opacity,
                width,
                height
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
          return <View style={{
            width, justifyContent: 'center', alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 1,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20

          }}>
            <Text style={{
              color: 'white',
              fontSize: 30,
              marginBottom: 30,
              fontFamily: "Cochin"

            }} >{item.name}</Text>
            <Image source={item.image} style={{
              width: imageW,
              height: imageH,
              resizeMode: 'cover',
              borderRadius: 16,

            }} />

            <Text style={{
              color: 'white',
              fontSize: 20,
              marginTop: 30,
              fontFamily: "Helvetica"

            }} >{item.role}</Text>
          </View>
        }}
      />
    </View >
  );
};
