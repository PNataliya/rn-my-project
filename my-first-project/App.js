import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const image = require("./images/bg.jpg");
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>EMAIL</Text>
            <TextInput style={styles.input} textAlign={"center"} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btnTitle}>SIGN IN</Text>
          </TouchableOpacity>
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
    // alignItems: "center",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderColor: "#f0f8ff",
    borderRadius: 6,

    fontSize: 18,
    color: "#f0f8ff",
  },
  btn: {
    marginTop: 40,
    backgroundColor: "#2196F3",
    height: 40,

    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },
  btnTitle: {
    fontSize: 18,
    color: "#f0f8ff",
  },
});
