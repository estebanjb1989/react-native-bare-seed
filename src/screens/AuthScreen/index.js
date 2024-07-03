import "react-native-get-random-values";
import "text-encoding-polyfill";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { generateSecretKey, getPublicKey } from "nostr-tools";
import { bytesToHex } from "@noble/hashes/utils"; // already an installed dependency
import { signUp, signIn } from "../../redux/slices/auth";
import {
  Container,
  Filler,
  FieldContainer,
  Title,
  Input,
  Button,
} from "./styles";

export default AuthScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [secretKey, setSecretKey] = useState(null);

  const handleSignUp = useCallback(() => {
    if (!name?.trim()?.length) {
      alert("Please enter your name");
      return;
    }

    const sk = generateSecretKey();
    const publicKey = getPublicKey(sk);

    const payload = {
      name,
      secretKeyHex: bytesToHex(sk),
      publicKey,
    };
    dispatch(signUp(payload));
  }, [name]);

  const handleSignIn = useCallback(() => {
    const publicKey = getPublicKey(secretKey);
    const payload = {
      name: null,
      secretKeyHex: secretKey,
      publicKey,
    };
    dispatch(signIn(payload));
  }, [secretKey]);

  return (
    <Container>
      <Filler />
      <FieldContainer>
        <Title>New user?</Title>
        <Input onChangeText={setName} placeholder="What's your name?" />
        <Button title="Sign up" onPress={handleSignUp} />
      </FieldContainer>
      <Filler />
      <FieldContainer>
        <Title>Already have an account?</Title>
        <Input
          onChangeText={setSecretKey}
          secureTextEntry
          placeholder="Paste secret hex key here"
        />
        <Button title="Sign in" onPress={handleSignIn} />
      </FieldContainer>
      <Filler />
    </Container>
  );
};
