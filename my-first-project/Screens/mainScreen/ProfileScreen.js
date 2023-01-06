import styled from "@emotion/styled";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  //   Image,
  //   ImageBackground,
  //   TouchableOpacity,
  //   Platform,
  //   Keyboard,
  //   Pressable,
  //   StatusBar,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styled.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
