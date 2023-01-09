import React, { useState } from "react";
import { COLORS, IMGS } from "../../assets/constants";

import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

// const avatar = require("../../images/avatar.png");

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={{ paddingRight: 8, width: 60, height: 60, borderRadius: 16 }}
          source={IMGS.avatar}
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
    color: COLORS.colorFontPrimary,
    letterSpacing: 0.01,
  },
  email: {
    paddingLeft: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 11,
    letterSpacing: 0.01,
    color: COLORS.colorFontPostUserEmail,
  },
});
