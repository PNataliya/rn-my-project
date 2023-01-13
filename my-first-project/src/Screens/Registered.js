import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./authScreens/RegistrationScreen";
import DefaultScreenPosts from "../Screens/nestedScreens/DefaultScreenPosts";
// import HomePage from "./Home";
import PostsScreen from "./mainScreen/PostsScreen";

const RegStack = createStackNavigator();

export default function Registered() {
  return (
    <RegStack.Navigator
      tabBarOptions={{ showLabel: false, headerBackVisible: true }}
    >
      <RegStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          headerShown: false,
        }}
      />
      <RegStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={DefaultScreenPosts}
      />
    </RegStack.Navigator>
  );
}
