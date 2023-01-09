import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Keyboard,
  Pressable,
  StatusBar,
} from "react-native";

const avatar = require("../../images/avatar.png");
const forest = require("../../images/posts/1forest.png");
const sunset = require("../../images/posts/2sunset.png");
const oldHouse = require("../../images/posts/3old_house.png");

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={{ paddingRight: 8, width: 60, height: 60, borderRadius: 16 }}
          source={avatar}
        />
        <View style={styles.postContainer}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>

      <StatusBar theme="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 32,
    paddingLeft: 16,
  },
  userContainer: {
    flexDirection: "row",
  },
  postContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
