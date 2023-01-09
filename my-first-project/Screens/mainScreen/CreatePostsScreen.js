import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  //   ImageBackground,
  TouchableOpacity,
  //   Platform,
  Keyboard,
  //   Pressable,
  //   StatusBar,
} from "react-native";

const initialState = {
  name: "",
  place: "",
};
// const DefaultHeader: NativeStackNavigationOptions = {
//   headerBackImageSource:
//     Platform.OS === "android"
//       ? require("../../Resources/Images/Icons/back.png")
//       : { uri: "back", width: 24, height: 24 }, // pull from assets, to avoid icon changing from default to custom
// };

const addPhotoIcon = require("../../images/addPhoto.png");
const mapPin = require("../../images/map-pin.png");

export default function CreatePostsScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [place, setPlace] = useState("");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
        <View style={styles.imageContainer}>
          <View style={{ alignItems: "center" }}>
            <Image source={addPhotoIcon} />
          </View>
        </View>
        <View style={{ marginLeft: 16, marginTop: 8 }}>
          <Text style={styles.title}>Загрузите фото</Text>
        </View>
        <View style={styles.formContainer}>
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? 100 : 140,
            }}
          >
            <View style={{ marginTop: 40 }}>
              <TextInput
                style={styles.input}
                textAlign={"start"}
                mode="flat"
                underlineColor="#E8E8E8"
                backgroundColor="#fff"
                activeUnderlineColor={"#E8E8E8"}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.name}
                placeholder="Название..."
                placeholderTextColor="#BDBDBD"
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, name: value }))
                }
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.inputMap}
                textAlign={"start"}
                mode="flat"
                underlineColor="#E8E8E8"
                backgroundColor="#fff"
                activeUnderlineColor={"#E8E8E8"}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.place}
                placeholder="Местность..."
                placeholderTextColor="#BDBDBD"
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, place: value }))
                }
              />
              <Image style={{ top: -38, left: 30 }} source={mapPin} />
            </View>
            <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
              <Text style={styles.btnTitle} onPress={keyboardHide}>
                Опубликовать
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    marginTop: 32,
    marginHorizontal: 16,
    // flexDirection: "row",
    // width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    borderBottomStyle: "solid",
    borderRadius: 8,
    justifyContent: "center",
  },
  title: {
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,

    color: "#BDBDBD",
  },
  formContainer: {
    width: "100%",
    // height: 549,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  input: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    fontFamily: "Roboto-Regular",
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputMap: {
    marginHorizontal: 16,
    paddingHorizontal: 45,
    fontFamily: "Roboto-Regular",
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    color: "#BDBDBD",
  },
  btn: {
    marginHorizontal: 16,
    marginTop: 23,
    marginBottom: 16,
    // width: "100%",
    height: 48,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        // backgroundColor: "#FF6C00",
        // borderColor: "#FF6C00",
        backgroundColor: "#F6F6F6",
        borderColor: "#F6F6F6",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "#FF6C00",
      },
    }),
  },
  btnTitle: {
    textAlign: "center",
    paddingVertical: 16,

    fontSize: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
});
