import React, { useCallback } from "react";
import { Alert, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { signedOut } from "src/store/slices/auth";
import { Group, Filler, AppTitle } from "src/styles";
import { Container } from "./styles";
import { PublicKeyBadge } from "src/components";
import { APP_NAME } from "@env";

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const handleSignOut = useCallback(() => {
    Alert.alert(
      "Alert",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => dispatch(signedOut()),
        },
      ],
      { cancelable: false }
    );
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <AppTitle>{APP_NAME}</AppTitle>
        <Filler />
        <Group centered>
          <PublicKeyBadge />
          <Filler height={32} />
          <Button title="Sign out" onPress={handleSignOut} />
        </Group>
      </Container>
    </SafeAreaView>
  );
};

export default CustomDrawer;
