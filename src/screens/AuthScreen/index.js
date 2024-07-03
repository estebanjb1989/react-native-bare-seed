import "react-native-get-random-values";
import "text-encoding-polyfill";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { generateSecretKey, getPublicKey } from "nostr-tools";
import { bytesToHex } from "@noble/hashes/utils"; // already an installed dependency
import { signedUp, signedIn } from "@store/slices/auth";
import { Container, Filler, Group, Title, Input, Button } from "./styles";

export default AuthScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [secretKey, setSecretKey] = useState(null);

  // generates the public key and the secret key and saves to the store
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
    dispatch(signedUp(payload));
  }, [name]);

  // gets the public key from the secret key entered by the user
  const handleSignIn = useCallback(() => {
    const publicKey = getPublicKey(secretKey);
    const payload = {
      name: null,
      secretKeyHex: secretKey,
      publicKey,
    };
    dispatch(signedIn(payload));
  }, [secretKey]);

  return (
    <Container>
      <Filler />
      <Group>
        <Title>New user?</Title>
        <Input onChangeText={setName} placeholder="What's your name?" />
        <Button title="Sign up" onPress={handleSignUp} />
      </Group>
      <Filler />
      <Group>
        <Title>Already have an account?</Title>
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
