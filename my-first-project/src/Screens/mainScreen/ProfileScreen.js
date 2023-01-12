import React, { useState, useEffect } from "react";

import { COLORS, IMGS } from "../../assets/constants";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  const [clicks, setClicks] = useState(0);
  const [result, setResult] = useState(0);

  const incr = () => {
    setClicks((p) => p + 1);
    // setResult(0);
  };

  useEffect(() => {
    if (clicks) {
      setResult(clicks);
    }
  }, [clicks]);
  const makeComment = async () => {
    console.log(`navigation`, navigation);
    navigation.navigate("CommentsScreen");
  };

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
            {/* 1 ====== */}
            <View style={styles.postWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreatePostsScreen")}
              >
                <Image source={IMGS.forestPostImg} />
              </TouchableOpacity>
              <Text style={styles.postName}>Лес</Text>
            </View>
            <View style={styles.descriptiontWrapper}>
              <TouchableOpacity onPress={makeComment}>
                <Image
                  style={{ marginRight: 9 }}
                  size={18}
                  source={IMGS.commentIcon}
                />
              </TouchableOpacity>

              <Text style={styles.textComment}>8</Text>
              <TouchableOpacity onPress={incr}>
                <Image
                  style={{ marginRight: 6 }}
                  size={24}
                  source={IMGS.likeIcon}
                />
              </TouchableOpacity>

              <Text style={styles.textLike}>{result}</Text>

              <Image source={IMGS.mapPinIcon} />
              <TouchableOpacity
                onPress={() => navigation.navigate("MapScreen")}
              >
                <Text style={styles.location}>Ukraine</Text>
              </TouchableOpacity>
            </View>
            {/* 2 ==== */}
            <View style={styles.postWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreatePostsScreen")}
              >
                <Image source={IMGS.sunsetPostImg} />
              </TouchableOpacity>
              <Text style={styles.postName}>Закат на Черном море</Text>
            </View>
            <View style={styles.descriptiontWrapper}>
              <TouchableOpacity onPress={makeComment}>
                <Image
                  style={{ marginRight: 9 }}
                  size={18}
                  source={IMGS.commentIcon}
                />
              </TouchableOpacity>
              <Text style={styles.textComment}>3</Text>
              <Image
                style={{ marginRight: 6 }}
                size={24}
                source={IMGS.likeIcon}
              />
              <Text style={styles.textLike}>200</Text>
              <Image source={IMGS.mapPinIcon} />
              <TouchableOpacity
                onPress={() => navigation.navigate("MapScreen")}
              >
                <Text style={styles.location}>Ukraine</Text>
              </TouchableOpacity>
            </View>
            {/* 3 ===== */}
            <View style={styles.postWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreatePostsScreen")}
              >
                <Image source={IMGS.oldHousePostImg} />
              </TouchableOpacity>
              <Text style={styles.postName}>Старый домик в Венеции</Text>
            </View>
            <View style={styles.descriptiontWrapper}>
              <TouchableOpacity onPress={makeComment}>
                <Image
                  style={{ marginRight: 9 }}
                  size={18}
                  source={IMGS.commentIcon}
                />
              </TouchableOpacity>
              <Text style={styles.textComment}>50</Text>
              <Image
                style={{ marginRight: 6 }}
                size={24}
                source={IMGS.likeIcon}
              />
              <Text style={styles.textLike}>200</Text>
              <Image source={IMGS.mapPinIcon} />
              <TouchableOpacity
                onPress={() => navigation.navigate("MapScreen")}
              >
                <Text style={styles.location}>Italy</Text>
              </TouchableOpacity>
            </View>
            {/* ===== */}
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
