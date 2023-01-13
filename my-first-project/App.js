import React from "react";
import { useCallback } from "react";
import {
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Navigate from "./src/Screens/navigate";
import MapScreen from "./src/Screens/nestedScreens/MapScreen";
import CommentsScreen from "./src/Screens/nestedScreens/CommentsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Navigate />
          {/* <MapScreen /> */}
          {/* <CommentsScreen /> */}
        </KeyboardAvoidingView>

        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
