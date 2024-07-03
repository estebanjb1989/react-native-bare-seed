import React, { useCallback } from "react";
import { Button } from "react-native";
import { Container, Filler, DrawerOptionText } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { signedOut } from "../../redux/slices/auth";

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const handleSignOut = useCallback(() => {
    dispatch(signedOut());
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Filler />
        <Button title="SIGN OUT" onPress={handleSignOut} />
      </Container>
    </SafeAreaView>
  );
};

export default CustomDrawer;
