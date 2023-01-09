import React, { useState } from "react";
import { COLORS, IMGS } from "../assets/constants";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Pressable,
  TextInput,
} from "react-native";

const initialState = {
  comment: "",
};

export default function CommentsScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: "100%", borderRadius: 8 }}
            source={IMGS.sunsetPostImg}
          />
        </View>
        <View style={styles.formContainer}>
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? -30 : 140,
            }}
          >
            <View style={styles.commentWrapper}>
              <Image source={IMGS.commentAvatar} size={28} />
              <View style={styles.textWrapper}>
                <Text style={styles.text}>
                  Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!
                </Text>
                <Text style={styles.commentDate}>09 июня, 2020 | 08:40</Text>
              </View>
            </View>
            <View style={styles.commentWrapper}>
              <View style={styles.userTextWrapper}>
                <Text style={styles.userComment}>
                  A fast 50mm like f1.8 would help with the bokeh. I’ve been
                  using primes as they tend to get a bit sharper images.
                </Text>
                <Text style={styles.userCommentDate}>
                  09 июня, 2020 | 09:14
                </Text>
              </View>
              <Image source={IMGS.commentUserAvatar} />
            </View>
            <View style={styles.commentWrapper}>
              <Image source={IMGS.commentAvatar} size={28} />
              <View style={styles.textAnswerWrapper}>
                <Text style={styles.text}>
                  Thank you! That was very helpful!
                </Text>
                <Text style={styles.commentDate}>09 июня, 2020 | 0920</Text>
              </View>
            </View>
            <View>
              <TextInput
                style={styles.input}
                keyboardType="comment"
                textAlign={"start"}
                mode="outlined"
                outlineColor="#E8E8E8"
                activeOutlineColor={"#FF6C00"}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.comment}
                placeholder="Комментировать..."
                placeholderTextColor="#BDBDBD"
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    comment: value,
                  }))
                }
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("PostsScreen")}
              >
                <Image
                  style={{ top: -60, left: 314 }}
                  source={IMGS.sendCommentIcon}
                  size={22}
                  color="#232323"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 32,
    width: "100%",
    marginTop: 32,
    borderRadius: 8,
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#fff",
  },
  commentWrapper: {
    width: 330,
    flexDirection: "row",
    marginBottom: 24,
  },
  textWrapper: {
    marginLeft: 16,
    padding: 16,
    flexDirection: "column",
    padding: 8,
    backgroundColor: "#E8E8E8",
  },
  text: {
    marginBottom: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 13,
    color: "#212121",
    letterSpacing: 0.8,
  },
  commentDate: {
    textAlign: "right",
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 10,
    color: "#212121",
    letterSpacing: 0.1,
  },
  userTextWrapper: {
    marginRight: 16,
    padding: 16,
    flexDirection: "column",
    padding: 8,
    backgroundColor: "#E8E8E8",
  },
  userComment: {
    marginBottom: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 13,
    color: "#212121",
    letterSpacing: 0.8,
  },
  userCommentDate: {
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 10,
    color: "#212121",
    letterSpacing: 0.1,
  },
  textAnswerWrapper: {
    marginLeft: 16,
    padding: 16,
    width: 312,
    flexDirection: "column",
    padding: 8,
    backgroundColor: "#E8E8E8",
  },
  form: {
    // marginHorizontal: 16,
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 100,
    fontSize: 16,
    color: "#212121",
  },
});
