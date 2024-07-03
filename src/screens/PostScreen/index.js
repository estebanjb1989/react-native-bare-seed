import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { postMessage } from "@helpers/nostr";
import {
  Container,
  Button,
  Filler,
  Title,
  FieldContainer,
  Input,
} from "./styles";

export default function PostScreen() {
  const user = useSelector((state) => state.auth.user);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);

  const handlePost = useCallback(() => {
    if (!message?.trim?.()?.length) {
      alert("Please enter a message");
      return;
    }
    setLoading(true);
    postMessage({
      user,
      message,
      onSuccess: (signedEvent) => {
        setLoading(false);
        console.log(signedEvent);
        alert("Posted message successfully");
      },
      onError: (error) => {
        setLoading(false);
        console.log(error);
        alert(error);
      },
    });
  }, [user, message, setLoading]);

  return (
    <Container>
      <Filler />
      <FieldContainer>
        <Title>{`What's up${user?.name ? `, ${user.name}?` : "?"}`}</Title>
        <Input
          defaultValue=""
          value={message}
          multiline
          onChangeText={setMessage}
        />
        <Button
          disabled={loading}
          onPress={handlePost}
          title="POST"
          accessibilityLabel="Send a message with post button"
        ></Button>
      </FieldContainer>
      <Filler />
    </Container>
  );
}
