import React, { useState } from "react";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import { COLORS, IMGS } from "../../assets/constants";
import { TextInput } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";

const initialState = {
  name: "",
  place: "",
};

export default function CreatePostsScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log(`location`, location);
    setPhoto(photo.uri);
    console.log(`camera`, photo.uri);
  };

  const sendPhoto = async () => {
    console.log(`navigation`, navigation);
    navigation.navigate("PostsScreen", { photo });
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: COLORS.bgColor,
        }}
      >
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 240, width: 200 }}
              />
            </View>
          )}

          <TouchableOpacity onPress={takePhoto}>
            <Image source={IMGS.addPhotoIcon} />
          </TouchableOpacity>
        </Camera>
        <View style={{ marginLeft: 16, marginTop: 8 }}>
          <Text style={styles.title}>Загрузите фото</Text>
        </View>
        <View style={styles.formContainer}>
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? 200 : 140,
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
              <Image style={{ top: -38, left: 30 }} source={IMGS.mapPinIcon} />
            </View>
            <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
              <Text style={styles.btnTitle} onPress={sendPhoto}>
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
    backgroundColor: COLORS.bgColor,
  },
  camera: {
    marginTop: 32,
    marginHorizontal: 16,
    // flexDirection: "row",
    // width: "100%",
    height: 240,
    backgroundColor: COLORS.bgColorInput,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    borderBottomStyle: "solid",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    borderColor: "#fff",
    backgroundColor: "tomato",
    top: 0,
    left: 0,
  },
  title: {
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,

    color: COLORS.colorFontSecondary,
  },
  formContainer: {
    width: "100%",
    // height: 549,
    backgroundColor: COLORS.bgColor,
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
    color: COLORS.colorFontSecondary,
  },
  inputMap: {
    marginHorizontal: 16,
    paddingHorizontal: 45,
    fontFamily: "Roboto-Regular",
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    color: COLORS.colorFontSecondary,
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
        backgroundColor: COLORS.buttonBgColorPrimary,
        borderColor: COLORS.buttonBgColorPrimary,
      },
      android: {
        backgroundColor: COLORS.buttonBgColorPrimary,
        borderColor: COLORS.buttonBgColorPrimary,
      },
    }),
  },
  btnTitle: {
    textAlign: "center",
    paddingVertical: 16,

    fontSize: 16,
    color: COLORS.colorFontSecondary,
    fontFamily: "Roboto-Regular",
  },
});
