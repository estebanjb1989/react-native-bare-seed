import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../screens/AuthScreen";
import navigationRoutes from "./routes";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={navigationRoutes.auth}>
      <Stack.Screen name={navigationRoutes.auth} component={AuthScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
