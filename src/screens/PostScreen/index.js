import React, { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Relay, finalizeEvent } from "nostr-tools";
import { hexToBytes } from "@noble/hashes/utils"; // already an installed dependency
import { useSelector } from "react-redux";

const interactWithRelay = async (user) => {
  let relay = null;
  try {
    relay = await Relay.connect("wss://relay.satlantis.io");
    console.log(`connected to ${relay.url}`, user);

    relay.subscribe(
      [
        {
          kinds: [1],
          authors: [user.publicKey],
        },
      ],
      {
        onevent(event) {
          console.log("got event:", event);
        },
      }
    );

    let eventTemplate = {
      kind: 1, // new post
      created_at: Math.floor(Date.now() / 1000),
      tags: [], // can have mentions and links here
      content: "Testing relay from React Native",
    };

    // this assigns the pubkey, calculates the event id and signs the event in a single step
    const signedEvent = finalizeEvent(
      eventTemplate,
      hexToBytes(user.secretKeyHex)
    );
    await relay.publish(signedEvent);
  } catch (error) {
    console.log({
      error,
    });
  } finally {
    relay?.close();
  }
};

export default function PostScreen() {
  const user = useSelector((state) => state.auth.user);
  const handlePost = useCallback(() => {
    interactWithRelay(user);
  }, [user]);
  return (
    <View style={styles.container}>
      <Text>SATLANTIS</Text>
      <Button onPress={handlePost} title="POST"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
