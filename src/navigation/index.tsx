import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AppDrawer from "./AppDrawer";
import AuthStack from "./AuthStack";
import { IStore } from "src/interfaces";

function Navigation() {
  const user = useSelector((state: IStore) => state.auth.user);
  return (
    <NavigationContainer>
      {user ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Navigation;
