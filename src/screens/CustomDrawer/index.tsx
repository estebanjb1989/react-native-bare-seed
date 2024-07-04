import React, { useCallback } from "react";
import { Alert, Button } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { signedOut } from "src/store/slices/auth";
import { IStore } from "src/interfaces/store";
import { Container, Filler, PKContainer, PKTitle, PKValue } from "./styles";

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const publicKey = useSelector((state: IStore) => state.auth.user?.publicKey);
  const handleSignOut = useCallback(() => {
    Alert.alert(
      "Alert",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
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

  const handleCopyToClipboard = useCallback(() => {
    Clipboard.setString(publicKey);
  }, [publicKey]);

  return (
    <SafeAreaView>
      <Container>
        <Filler />
        <PKContainer>
          <PKTitle>Public Key</PKTitle>
          <PKValue>{publicKey}</PKValue>
          <Button title="COPY" onPress={handleCopyToClipboard} />
        </PKContainer>
        <Button title="SIGN OUT" onPress={handleSignOut} />
      </Container>
    </SafeAreaView>
  );
};

export default CustomDrawer;
