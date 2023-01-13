import React, { useEffect, useState } from "react";
import { COLORS, IMGS } from "../../assets/constants";

import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

// const avatar = require("../../images/avatar.png");

export default function DefaultScreenPosts({ route, navigation }) {
  const [posts, setPosts] = useState([]);
  console.log(`route.params`, route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(`posts`, posts);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={{ paddingRight: 8, width: 60, height: 60, borderRadius: 16 }}
          source={IMGS.avatar}
        />
        <View style={styles.usernameContainer}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      {/* ======== */}
      <View style={styles.postsContainer}>
        <Text>Posts</Text>
      </View>
      {/* ======== */}
      {/* <View style={styles.postsContainer}>
        <Text style={{ fontSize: 20, color: "#212121" }}>Posts</Text>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <View style={styles.postWrapper}>
                // == 1=====
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile page")}
                >
                  <Image source={{ uri: item.photo }} />
                </TouchableOpacity>
                <Text style={styles.postName}>Лес</Text>
              </View>
              <View style={styles.descriptiontWrapper}>
                <TouchableOpacity>
                  <Image
                    style={{ marginRight: 6 }}
                    size={24}
                    source={IMGS.likeIcon}
                  />
                </TouchableOpacity>

                <Text style={styles.textLike}>8</Text>

                <Image source={IMGS.mapPinIcon} />
                <TouchableOpacity onPress={() => navigation.navigate("MapPin")}>
                  <Text style={styles.location}>Ukraine</Text>
                </TouchableOpacity>
              </View>
            </View>
            // =========
          )}
        />
      </View> */}

      <StatusBar theme="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignContent: "center",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  userContainer: {
    flexDirection: "row",
  },
  usernameContainer: {
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
  postsContainer: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignContent: "center",
  },
  postWrapper: {},
  postName: {
    paddingTop: 8,
    fontFamily: "Roboto-Bold",
    fontWeight: 500,
    fontSize: 16,
    color: COLORS.colorFontPrimary,
    letterSpacing: 0.01,
  },
  descriptiontWrapper: {
    flexDirection: "row",
    paddingTop: 11,
    marginBottom: 35,
  },
  textLike: {
    marginRight: 128,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    color: COLORS.colorFontPrimary,
    letterSpacing: 0.01,
  },
  location: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    color: COLORS.colorFontPrimary,
    letterSpacing: 0.01,
    textDecorationLine: "underline",
  },
});
