import { Relay, finalizeEvent } from "nostr-tools";
import { hexToBytes } from "@noble/hashes/utils";
import { RELAY_URL } from "@env";
import { INostrEvent } from "src/interfaces"
import { IAuthUser } from "src/interfaces";

interface IPostMessagePayload {
  user: IAuthUser;
  message: string;
  onSuccess: (signedEvent: INostrEvent) => void;
  onError: (errorMessage: string) => void;
}

/**
 * Function to connect to the relay and send event Kind 1
 * when the user is posting a message
 */
export const postMessage = async ({ 
  user, 
  message, 
  onSuccess,
  onError 
}: IPostMessagePayload) => {
  let relay = null;
  try {
    relay = await Relay.connect(RELAY_URL);
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
    onError(error?.toString() ?? "Unhandled exception");
  } finally {
    relay?.close();
  }
};
