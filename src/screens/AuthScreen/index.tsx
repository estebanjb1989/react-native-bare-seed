import React from "react";
import "react-native-get-random-values";
import "text-encoding-polyfill";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { generateSecretKey, getPublicKey } from "nostr-tools";
import { bytesToHex, hexToBytes } from "@noble/hashes/utils";
import { signedUp, signedIn } from "src/store/slices/auth";
import {
  Container,
  Filler,
  Group,
  Title,
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

  return (
    <Container>
      <Filler />
      <Title>Nostr client app</Title>
      <Group>
        <Subtitle>New user?</Subtitle>
        <Input onChangeText={setName} placeholder="What's your name?" />
        <Button title="Sign up" onPress={handleSignUp} />
      </Group>
      <Filler />
      <Group>
        <Subtitle>Already have an account?</Subtitle>
        <Input
          onChangeText={setSecretKey}
          secureTextEntry
          placeholder="Paste secret hex key here"
        />
        <Button title="Sign in" onPress={handleSignIn} />
      </Group>
      <Filler />
    </Container>
  );
};

export default AuthScreen;
