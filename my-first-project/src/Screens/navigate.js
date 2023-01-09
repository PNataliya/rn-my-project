import React, { useState } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native";

import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import Home from "./Home";
import PostsScreen from "./mainScreen/PostsScreen";
import CreatePostsScreen from "./mainScreen/CreatePostsScreen";
import ProfileScreen from "./mainScreen/ProfileScreen";
import CommentsScreen from "./CommentsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const goPosts = require("../assets/images_navigation/goPosts.jpg");
const addPost = require("../assets/images_navigation/createPost.png");
const goProfile = require("../assets/images_navigation/goProfile.png");
const comment = require("../assets/images_navigation/comment.png");
const deletePost = require("../images/delete.png");
const logout = require("../assets/images_navigation/logout.png");

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName={RegistrationScreen}>
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
    <MainTab.Navigator
      tabBarOptions={{ showLabel: false, headerBackVisible: true }}
    >
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
          headerShown: true,
          tabBarIcon: ({ focused, size, color }) => (
            <Image style={{ width: 70, height: 40 }} source={addPost} />
          ),
        }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: true,

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
  const routing = useRoute(null);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
