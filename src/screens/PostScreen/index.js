import React, { useCallback, useState } from "react";
import { Relay, finalizeEvent } from "nostr-tools";
import { hexToBytes } from "@noble/hashes/utils";
import { useSelector } from "react-redux";
import {
  Container,
  Button,
  Filler,
  Title,
  FieldContainer,
  Input,
} from "./styles";

const postMessage = async ({ user, message, onSuccess, onError }) => {
  let relay = null;
  try {
    relay = await Relay.connect("wss://relay.satlantis.io");
    let eventTemplate = {
      kind: 1,
      created_at: Math.floor(Date.now() / 1000),
      tags: [],
      content: message,
    };
    const signedEvent = finalizeEvent(
      eventTemplate,
      hexToBytes(user.secretKeyHex)
    );
    await relay.publish(signedEvent);
    onSuccess(signedEvent);
  } catch (error) {
    onError(error);
  } finally {
    relay?.close();
  }
};

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
        console.log(error);
        alert(error);
        setLoading(false);
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
