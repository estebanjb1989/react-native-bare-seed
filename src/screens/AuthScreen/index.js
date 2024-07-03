import "react-native-get-random-values";
import "text-encoding-polyfill";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { generateSecretKey, getPublicKey } from "nostr-tools";
import { signUp } from "../../redux/slices/auth";
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
  const handleSignUp = useCallback(() => {
    if (!name?.trim()?.length) {
      alert("Please enter your name");
      return;
    }

    console.log({
      signUp,
    });

    const secretKey = generateSecretKey();
    const publicKey = getPublicKey(secretKey);

    dispatch(
      signUp({
        name,
        secretKey,
        publicKey,
      })
    );
  }, [name]);
  const handleSignIn = useCallback(() => {}, []);

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
        <Input secureTextEntry placeholder="Paste secret key here" />
        <Button title="Sign in" />
      </FieldContainer>
      <Filler />
    </Container>
  );
};
