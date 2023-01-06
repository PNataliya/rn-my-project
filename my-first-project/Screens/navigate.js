import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image } from "react-native";
import styled from "@emotion/styled";

import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
// import PostsScreen from "./mainScreen/PostsScreen";
// import Home from "./Home";

import PostsScreen from "./mainScreen/PostsScreen";
import CreatePostsScreen from "./mainScreen/CreatePostsScreen";
import ProfileScreen from "./mainScreen/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const goPosts = require("../assets/images_navigation/goPosts.jpg");
const addPost = require("../assets/images_navigation/createPost.png");
const goProfile = require("../assets/images_navigation/goProfile.png");
const logout = require("../assets/images_navigation/logout.png");

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={goPosts} size={24} />
          ),
        }}
        name="Публикации"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image style={{ width: 70, height: 40 }} source={addPost} />
          ),
        }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={goProfile} size={24} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
export default function Navigate() {
  const routing = useRoute({});
  return <NavigationContainer>{routing}</NavigationContainer>;
}

const styles = StyleSheet.create({
  homeTitle: {
    marginTop: 92,
    fontSize: 30,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#212121",
  },
});
