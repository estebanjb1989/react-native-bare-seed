import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { postMessage } from "src/helpers/nostr";
import { IStore } from "src/interfaces/store"
import { INostrEvent } from "src/interfaces/nostr";
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

  const handlePost = useCallback(() => {
    if (!message?.trim?.()?.length) {
      alert("Please enter a message");
      return;
    }
    setLoading(true);
    postMessage({
      user,
      message,
      onSuccess: (signedEvent: INostrEvent) => {
        setLoading(false);
        console.log(signedEvent);
        alert("Posted message successfully");
      },
      onError: (error: string) => {
        setLoading(false);
        console.log(error);
        alert(error);
      },
    });
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
