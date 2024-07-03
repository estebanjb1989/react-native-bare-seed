import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import navigationRoutes from "./routes"

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName={navigationRoutes.auth}>
      <Stack.Screen name={navigationRoutes.post} component={PostScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
