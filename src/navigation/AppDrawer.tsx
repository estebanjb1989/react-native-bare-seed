import React from "react";
import CustomDrawer from "@screens/CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PostStack from "./PostStack";
import routes from "./routes";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(): React.ReactElement {
  return (
    <Drawer.Navigator drawerContent={() => <CustomDrawer />}>
      <Drawer.Screen
        options={{
          title: "",
        }}
        name={routes.postStack.key}
        component={PostStack}
      />
    </Drawer.Navigator>
  );
}
