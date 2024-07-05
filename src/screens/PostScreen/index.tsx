import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { postMessage } from "src/helpers/nostr";
import { IStore } from "src/interfaces/store"
import { ButtonContainer, Filler, Group, Title } from "src/styles";
import {
  Container,
  Button,
  Input,
} from "./styles";

export default function PostScreen() {
  const user = useSelector((state: IStore) => state.auth.user);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handlePost = useCallback(async () => {
    if (!message?.trim?.()?.length) {
      alert("Please enter a message");
      return;
    }
    try {
      setLoading(true);
      await postMessage({
        user,
        message,
      }) 
      setLoading(false);
      alert("Message has been posted successfully");
    } catch(error) {
      setLoading(false);
      alert(error);
    }
  }, [user, message, setLoading]);

  return (
    <Container>
      <Filler />
      <Group>
        <Title>{`What's up${user?.name ? `, ${user.name}?` : "?"}`}</Title>
        <Input
          defaultValue=""
          value={message}
          multiline
          onChangeText={setMessage}
        />
        <ButtonContainer>
          <Button
            disabled={loading}
            onPress={handlePost}
            title="POST"
            accessibilityLabel="Send a message with post button"
          />
        </ButtonContainer>
      </Group>
      <Filler />
    </Container>
  );
}
