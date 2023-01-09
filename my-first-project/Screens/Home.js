import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import PostsScreen from "./mainScreen/PostsScreen";
import CreatePostsScreen from "./mainScreen/CreatePostsScreen";
import ProfileScreen from "./mainScreen/ProfileScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

const MainTab = createBottomTabNavigator();

const goPosts = require("../assets/images_navigation/goPosts.jpg");
const addPost = require("../assets/images_navigation/createPost.png");
const goProfile = require("../assets/images_navigation/goProfile.png");
const comment = require("../assets/images_navigation/comment.png");
const deletePost = require("../images/delete.png");
const logout = require("../assets/images_navigation/logout.png");

export default function Home() {
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
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={goProfile} size={24} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
      {/* <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={comment} size={24} />
          ),
        }}
        name="Comment"
        component={CommentsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={deletePost} size={24} />
          ),
        }}
        name="Map"
        component={MapScreen}
      /> */}
    </MainTab.Navigator>
  );
}
