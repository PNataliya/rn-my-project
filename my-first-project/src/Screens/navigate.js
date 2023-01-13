import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native";
import { IMGS } from "../assets/constants";

import RegistrationScreen from "./authScreens/RegistrationScreen";
import Registered from "./Registered";
import LoginScreen from "./authScreens/LoginScreen";
import PostsScreen from "./mainScreen/PostsScreen";
import CreatePostsScreen from "./mainScreen/CreatePostsScreen";
import Profile from "./Profile";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

// const HomeStack = createStackNavigator();

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
    <MainTab.Navigator
      screenOptions={{ tabBarShowLabel: false, headerBackVisible: true }}
    >
      <MainTab.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={IMGS.goPostsTabBar} size={24} />
          ),
        }}
      />
      <MainTab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              style={{ width: 70, height: 40 }}
              source={IMGS.createPostTabBar}
            />
          ),
        }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Image size={24} source={IMGS.goProfileTabBar} />
          ),
        }}
        name="Profile page"
        component={Profile}
      />
    </MainTab.Navigator>
  );
};

export default function Navigate() {
  const routing = useRoute({});
  return <NavigationContainer>{routing}</NavigationContainer>;
}
