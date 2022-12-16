import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const image = require("./images/bg.jpg");
export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
          >
            <View>
              <Text style={styles.inputTitle}>EMAIL</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
              />
            </View>
            <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
              <Text style={styles.btnTitle} onPress={keyboardHide}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
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

    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#2196F3",
      },
      android: {
        backgroundColor: "#2196F3",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    fontSize: 18,
    color: "#f0f8ff",
  },
});
