import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { useFonts, Aclonica_400Regular } from '@expo-google-fonts/aclonica';
import Pagination from "./Pagination";

const { width, height } = Dimensions.get("window");

const Slideitem = ({ item }) => {
  let [fontsLoaded, error] = useFonts({
    Aclonica_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <ImageBackground source={item.imageBack} style={styles.imageBack}>
        <Text style={styles.title}>{item.logo}</Text>
        <Text style={styles.subtitle}>{item.talk}</Text>
      </ImageBackground>
    </View>

  );
};

export default Slideitem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 765,
    zIndex: 1,
  },
  content: {
    alignItems: "center",
    backgroundColor: "#0898A0",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    zIndex: 3,
    position: "absolute",
    alignSelf: "flex-end",
    height: "30%",
    bottom: 0,
  },
  title: {
    fontFamily: "Aclonica_400Regular",
    fontSize: 25,
    color: "white",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 35,
    fontWeight: "800",
    color: "white",
  },
  description: {
    fontSize: 20,
    fontWeight: "normal",
    color: "white",
  },
  imageBack: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
