import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "@screens/AuthScreen";
import navigationRoutes from "./routes";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationRoutes.authStack.auth}
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
