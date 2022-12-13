import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const image = require("./images/bg.jpg");
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <View style={styles.innerBox}>
          <Text style={styles.text}>Hello, my Project!</Text>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  innerBox: {
    borderWidth: 1,
    borderColor: "red",
    padding: 40,
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
