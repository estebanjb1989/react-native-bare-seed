import { Relay, finalizeEvent } from "nostr-tools";
import { hexToBytes } from "@noble/hashes/utils";

/**
 * Function to connect to the relay and send event Kind 1
 * when the user is posting a message
 */
export const postMessage = async ({ user, message, onSuccess, onError }) => {
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
