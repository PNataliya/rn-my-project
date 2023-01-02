import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const AuthStack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="RegistrationScreen">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="RegistrForm"
          component={RegistrationScreen}
        />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
