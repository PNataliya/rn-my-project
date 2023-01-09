import React, { useState } from "react";

import { COLORS, IMGS } from "../../assets/constants";
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

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground style={styles.image} source={IMGS.bgImg}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={IMGS.avatar} />
          </View>
          <Image style={styles.deletePhoto} source={IMGS.deletePhotoIcon} />
          <TouchableOpacity>
            <Image style={styles.logout} size={24} source={IMGS.logoutIcon} />
          </TouchableOpacity>

          <View>
            <Text style={styles.formTitle}>Natali Romanova</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              {/* 1 ====== */}
              <View style={styles.postWrapper}>
                <Image source={IMGS.forestPostImg} />
                <Text style={styles.postName}>Лес</Text>
              </View>
              <View style={styles.descriptiontWrapper}>
                <Image
                  style={{ marginRight: 9 }}
                  size={18}
                  source={IMGS.commentIcon}
                />
                <Text style={styles.textComment}>8</Text>
                <Image
                  style={{ marginRight: 6 }}
                  size={24}
                  source={IMGS.likeIcon}
                />
                <Text style={styles.textLike}>153</Text>
                <Image source={IMGS.mapPinIcon} />
                <Text style={styles.location}>Ukraine</Text>
              </View>
              {/* 2 ==== */}
              <View style={styles.postWrapper}>
                <Image source={IMGS.sunsetPostImg} />
                <Text style={styles.postName}>Закат на Черном море</Text>
              </View>
              <View style={styles.descriptiontWrapper}>
                <Image
                  style={{ marginRight: 9 }}
                  size={18}
                  source={IMGS.commentIcon}
                />
                <Text style={styles.textComment}>3</Text>
                <Image
                  style={{ marginRight: 6 }}
                  size={24}
                  source={IMGS.likeIcon}
                />
                <Text style={styles.textLike}>200</Text>
                <Image source={IMGS.mapPinIcon} />
                <Text style={styles.location}>Ukraine</Text>
              </View>
              {/* 3 ===== */}
              <View style={styles.postWrapper}>
                <Image source={IMGS.oldHousePostImg} />
                <Text style={styles.postName}>Старый домик в Венеции</Text>
              </View>
              <View style={styles.descriptiontWrapper}>
                <Image
                  style={{ marginRight: 9 }}
                  size={18}
                  source={IMGS.commentIcon}
                />
                <Text style={styles.textComment}>50</Text>
                <Image
                  style={{ marginRight: 6 }}
                  size={24}
                  source={IMGS.likeIcon}
                />
                <Text style={styles.textLike}>200</Text>
                <Image source={IMGS.mapPinIcon} />
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
    backgroundColor: COLORS.bgColor,
    // justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    backgroundColor: COLORS.bgColorInput,
    width: 120,
    height: 120,
    borderRadius: 16,
    top: -65,
    left: 135,
  },
  deletePhoto: {
    top: 10,
    left: 60,
  },
  logout: {
    top: -20,
    left: 160,
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
    color: COLORS.colorFontPrimary,
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
    color: COLORS.colorFontPrimary,
    letterSpacing: 0.01,
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
