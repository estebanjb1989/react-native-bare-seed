import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "@screens/PostScreen";
import navigationRoutes from "./routes";

const Stack = createStackNavigator();

function PostStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={navigationRoutes.postStack.post}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
}

export default PostStack;
