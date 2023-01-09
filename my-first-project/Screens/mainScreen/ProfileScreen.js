import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

const image = require("../../images/Photo-BG.jpg");
const avatar = require("../../images/avatar.png");

const forest = require("../../images/posts/1forest.png");
const sunset = require("../../images/posts/2sunset.png");
const oldHouse = require("../../images/posts/3old_house.png");
const deletePhoto = require("../../assets/images_navigation/deletePhoto.png");
const logout = require("../../assets/images_navigation/logout.png");
const comment = require("../../assets/images_navigation/comment.png");
const like = require("../../assets/images_navigation/like.png");
const mapPin = require("../../images/map-pin.png");

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground style={styles.image} source={image}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={avatar} />

            <TouchableOpacity>
              <Image style={styles.logout} size={24} source={logout} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.formTitle}>Natali Romanova</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              {/* 1 ====== */}
              <View style={styles.postWrapper}>
                <Image source={forest} />
                <Text style={styles.postName}>Лес</Text>
              </View>
              <View style={styles.descriptiontWrapper}>
                <Image style={{ marginRight: 9 }} size={18} source={comment} />
                <Text style={styles.textComment}>8</Text>
                <Image style={{ marginRight: 6 }} size={24} source={like} />
                <Text style={styles.textLike}>153</Text>
                <Image source={mapPin} />
                <Text style={styles.location}>Ukraine</Text>
              </View>
              {/* 2 ==== */}
              <View style={styles.postWrapper}>
                <Image source={sunset} />
                <Text style={styles.postName}>Лес</Text>
              </View>
              <View style={styles.descriptiontWrapper}>
                <Image style={{ marginRight: 9 }} size={18} source={comment} />
                <Text style={styles.textComment}>3</Text>
                <Image style={{ marginRight: 6 }} size={24} source={like} />
                <Text style={styles.textLike}>200</Text>
                <Image source={mapPin} />
                <Text style={styles.location}>Ukraine</Text>
              </View>
              {/* 3 ===== */}
              <View style={styles.postWrapper}>
                <Image source={oldHouse} />
                <Text style={styles.postName}>Лес</Text>
              </View>
              <View style={styles.descriptiontWrapper}>
                <Image style={{ marginRight: 9 }} size={18} source={comment} />
                <Text style={styles.textComment}>50</Text>
                <Image style={{ marginRight: 6 }} size={24} source={like} />
                <Text style={styles.textLike}>200</Text>
                <Image source={mapPin} />
                <Text style={styles.location}>Ukraine</Text>
              </View>
              {/* ===== */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    marginTop: 147,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    top: -65,
    left: 135,
  },
  logout: {
    top: -30,
    left: 200,
  },
  formTitle: {
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
    fontSize: 30,
    letterSpacing: 0.01,
    textAlign: "center",
  },
  postWrapper: {},
  postName: {
    paddingTop: 8,
    fontFamily: "Roboto-Bold",
    fontWeight: 500,
    fontSize: 16,
    color: "#212121",
    letterSpacing: 0.01,
  },
  descriptiontWrapper: {
    flexDirection: "row",
    paddingTop: 11,
    marginBottom: 35,
  },
  textComment: {
    marginRight: 27,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    color: "#212121",
    letterSpacing: 0.01,
  },
  textLike: {
    marginRight: 128,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    color: "#212121",
    letterSpacing: 0.01,
  },
  location: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    color: "#212121",
    letterSpacing: 0.01,
    textDecorationLine: "underline",
  },
});

//  {
/* <TouchableOpacity onPress={() => navigation.navigate("PostsScreen")}></TouchableOpacity> */
//  }
//  {
/* <View style={styles.postWrapper}>
              <Image source={forest} />
              <Text style={styles.postName}>Лес</Text>
        //     </View> */
//  }
//  {
/* <View style={styles.descriptiontWrapper}>
              <Image style={{ marginRight: 9 }} size={18} source={comment} />
              <Text style={styles.textComment}>8</Text>
              <Image style={{ marginRight: 6 }} size={24} source={like} />
              <Text style={styles.textLike}>153</Text>
              <Image source={mapPin} />
              <Text style={styles.location}>Ukraine</Text>
            </View> */
//  }

//  {
/* <FlatList
          data={posts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Text>{item.photo}</Text>
              <Text>{item.name}</Text>
              <Text>{item.place}</Text>
            </TouchableOpacity>
          )}
        /> */
//  }
