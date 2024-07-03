import React from "react";
import CustomDrawer from "@screens/CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PostStack from "./PostStack";
import routes from "./routes";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          title: null,
        }}
        name={routes.postStack.key}
        component={PostStack}
      />
    </Drawer.Navigator>
  );
}
