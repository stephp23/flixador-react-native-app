import React from "react";
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { useFonts, RockSalt_400Regular} from '@expo-google-fonts/rock-salt';

const { width, height } = Dimensions.get('screen');

const data = [
  {
    image: require('../../../assets/stephanie.png'),
    name: 'Stephanie Pena',
    role: 'Front End Web Developer',
    linkedin: 'https://www.linkedin.com/in/stephanieapena/'
  },
  {
    image: require('../../../assets/leesel.png'),
    name: 'Leesel Fraser',
    role: 'Fullstack Web Developer',
    linkedin: 'https://linkedin.com/leesel'
  },
  {
    image: require('../../../assets/ayman.png'),
    name: 'Ayman Omer',
    role: 'Fullstack Web Developer',
    linkedin: 'https://www.linkedin.com/in/ayman-omer-b2429b1ab/'
  },
  {
    image: require('../../../assets/katherine.png'),
    name: 'Katherine Fernandez',
    role: 'Product Designer',
    linkedin: 'https://www.linkedin.com/in/katfernandez22/'
  }
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  let [fontsLoaded] = useFonts({
    RockSalt_400Regular,
  });
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
              fontSize: 25,
              marginBottom: 30,
              fontFamily: fontsLoaded ? 'RockSalt_400Regular' : "Optima",
              fontWeight: "bold",

            }} >{item.name}</Text>
            <TouchableOpacity onPress={ ()=>{ Linking.openURL(item.linkedin)}} >
              <Image source={item.image} style={{
                width: imageW,
                height: imageH,
                resizeMode: 'cover',
                borderRadius: 16,

              }} />
            </TouchableOpacity>
            <Text style={{
              color: 'white',
              fontSize: 20,
              marginTop: 30,
              fontFamily: "Optima",
              fontWeight: "bold",

            }} >{item.role}</Text>
          </View>
        }}
      />
    </View >
  );
};
