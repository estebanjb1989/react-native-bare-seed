import { NavigationContainer } from "@react-navigation/native";

import AppDrawer from "./AppDrawer";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

function Navigation() {
  const user = useSelector((state) => state.auth.user);
  return (
    <NavigationContainer>
      {user ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Navigation;
