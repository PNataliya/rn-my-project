import React from "react";

import { Text, View } from "react-native";
import PostsScreen from "./mainScreen/PostsScreen";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <PostsScreen />
      {/* <Text style={styled.homeTitle}>Home Screen</Text> */}
    </View>
    // <NavigationContainer>
    //   <MainTab.Navigator>
    //     <MainTab.Screen name="Публикации" component={PostsScreen} />
    //     <MainTab.Screen
    //       name="Создать публикацию"
    //       component={CreatePostsScreen}
    //     />
    //   </MainTab.Navigator>
    // </NavigationContainer>
  );
}
