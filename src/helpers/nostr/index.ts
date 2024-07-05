import { Relay, finalizeEvent, EventTemplate, getPublicKey } from "nostr-tools";
import { hexToBytes } from "@noble/hashes/utils";
import { RELAY_URL } from "@env";
import { INostrEvent } from "src/interfaces"
import { IAuthUser } from "src/interfaces";

interface IPostMessagePayload {
  user: IAuthUser;
  message: string;
}

// we have a several event kinds, for this implementation we are using
// kind 1 event to post a new message to the relay
const EVENT_KIND = {
  POST_MESSAGE: 1,
}

const createEventTemplate = (kind: number, content: string): EventTemplate => {
 return {
    kind,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content,
  } 
}

interface INostrError {}

const handleError = (error: unknown | string) => {
  throw new Error(error?.toString() ?? "Unhandled exception");
}

/**
 * Function to connect to the relay and send event Kind 1
 * when the user is posting a message
 */
export const postMessage = async ({ 
  user, 
  message, 
}: IPostMessagePayload): Promise<INostrEvent> => {
  let relay = null;
  try {
    const secretKey = hexToBytes(user.secretKeyHex);
    // validate keys
    getPublicKey(secretKey);

    relay = await Relay.connect(RELAY_URL);
    const signedEvent = finalizeEvent(
      createEventTemplate(EVENT_KIND.POST_MESSAGE, message),
      secretKey
    );
    await relay.publish(signedEvent);
    return signedEvent as INostrEvent;
  } catch (error: unknown) {
    return handleError(error)
  } finally {
    relay?.close();
  }
};
