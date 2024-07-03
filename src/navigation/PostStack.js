import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import navigationRoutes from "./routes";

const Stack = createStackNavigator();

function PostStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={navigationRoutes.auth}
    >
      <Stack.Screen
        name={navigationRoutes.postStack.post}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
}

export default PostStack;
