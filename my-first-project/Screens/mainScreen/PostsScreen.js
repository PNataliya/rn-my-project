import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Image,
  //   ImageBackground,
  TouchableOpacity,
  Platform,
  Keyboard,
  Pressable,
  StatusBar,
} from "react-native";
import styled from "@emotion/styled";

const avatar = require("../../images/avatar.png");

export default function PostsScreen() {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={
            (styled.image,
            { paddingRight: 8, width: 60, height: 60, borderRadius: 16 })
          }
          source={avatar}
        />

        <View style={styled.textContainer}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <StatusBar theme="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    alignContent: "center",
    paddingTop: 32,
    paddingLeft: 16,
  },
  textContainer: {
    // flex: 1,
    // flexDirection: "column",
    // alignContent: "center",
    // justifyContent: "center",
  },
  name: {
    paddingLeft: 8,
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 13,
    color: "#212121",
    letterSpacing: 0.01,
  },
  email: {
    paddingLeft: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 11,
    letterSpacing: 0.01,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
