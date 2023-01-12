import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./mainScreen/ProfileScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

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
      <ProfileStack.Screen name="Comment" component={CommentsScreen} />
      {/* <ProfileStack.Screen name="Map" component={MapScreen} /> */}
    </ProfileStack.Navigator>
  );
}
