import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PostsScreen from "./mainScreen/PostsScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

const HomeStack = createStackNavigator();

// const comment = require("../assets/images_navigation/comment.png");
// const deletePost = require("../images/delete.png");
// const logout = require("../assets/images_navigation/logout.png");

export default function HomePage() {
  return (
    <HomeStack.Navigator
      tabBarOptions={{ showLabel: false, headerBackVisible: true }}
    >
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Posts"
        component={PostsScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Comment"
        component={CommentsScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Map"
        component={MapScreen}
      />
    </HomeStack.Navigator>
  );
}
