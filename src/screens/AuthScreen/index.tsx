import React from "react";
import "react-native-get-random-values";
import "text-encoding-polyfill";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { generateSecretKey, getPublicKey } from "nostr-tools";
import { bytesToHex, hexToBytes } from "@noble/hashes/utils";
import { signedUp, signedIn } from "src/store/slices/auth";
import { ButtonContainer, Filler, Group, AppTitle } from "src/styles";
import { APP_NAME } from "@env";
import {
  Container,  
  Subtitle,
  Input,
  Button,
} from "./styles";

const AuthScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [secretKey, setSecretKey] = useState<string>("");

  // generates the public key and the secret key and saves to the store
  const handleSignUp = useCallback(() => {
    try {
      if (!name?.trim()?.length) {
        throw new Error("Please enter your name to sign up");
      }

      const sk = generateSecretKey();
      const publicKey = getPublicKey(sk);

      const payload = {
        name,
        secretKeyHex: bytesToHex(sk),
        publicKey,
      };
      dispatch(signedUp(payload));
    } catch (error) {
      alert(error);
    }
  }, [name]);

  // gets the public key from the secret key entered by the user
  const handleSignIn = useCallback(() => {
    try {
      if (!secretKey?.trim()?.length) {
        throw new Error("Please enter the secret key to sign in");
      }
      const sk = hexToBytes(secretKey);
      const publicKey = getPublicKey(sk);
      const payload = {
        name: null,
        secretKeyHex: secretKey,
        publicKey,
      };
      dispatch(signedIn(payload));
    } catch (error) {
      alert(error);
    }
  }, [secretKey]);

  const handleNameChange = useCallback((text: string) => {
    setName(text)
  }, [setName])

  const handleSecretKeyChange = useCallback((text: string) => {
    setSecretKey(text)
  }, [setName])

  return (
    <Container>
      <Filler />
      <AppTitle>{APP_NAME}</AppTitle>
      <Group contained>
        <Subtitle>New user?</Subtitle>
        <Input onChangeText={handleNameChange} placeholder="What's your name?" />
        <ButtonContainer>
          <Button title="Sign up" onPress={handleSignUp} />
        </ButtonContainer>
      </Group>
      <Filler />
      <Group contained>
        <Subtitle>Already have an account?</Subtitle>
        <Input
          onChangeText={handleSecretKeyChange}
          secureTextEntry
          placeholder="Paste secret hex key here"
        />
        <ButtonContainer>
          <Button title="Sign in" onPress={handleSignIn} />
        </ButtonContainer>
      </Group>
      <Filler />
    </Container>
  );
};

export default AuthScreen;
