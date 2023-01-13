import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./mainScreen/ProfileScreen";
import CommentsScreen from "./nestedScreens/CommentsScreen";
import MapScreen from "./nestedScreens/MapScreen";

const ProfileStack = createStackNavigator();

export default function Profile() {
  return (
    <ProfileStack.Navigator initialRouteName={ProfileScreen}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        options={{
          headerShown: true,
        }}
        name="Комментарии"
        component={CommentsScreen}
      />
      <ProfileStack.Screen
        options={{
          headerShown: true,
        }}
        name="MapPin"
        component={MapScreen}
      />
    </ProfileStack.Navigator>
  );
}
