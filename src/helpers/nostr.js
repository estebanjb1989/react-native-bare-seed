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
      kind: 1, // new post
      created_at: Math.floor(Date.now() / 1000),
      tags: [], // can have mentions and links here
      content: message,
    };

    // this assigns the pubkey, calculates the event id and signs the event in a single step
    const signedEvent = finalizeEvent(
      eventTemplate,
      hexToBytes(user.secretKeyHex)
    );
    await relay.publish(signedEvent);

    console.log({
      relayUrl: relay.url,
      signedEvent,
    });
    onSuccess();
  } catch (error) {
    console.log({
      error,
    });
    onError(error);
  } finally {
    relay?.close();
  }
};

/**
 * Polyfill for MessageChannel class, used by nostr. 
 */
export class MessageChannel {
  constructor() {
    this.port1 = new MessagePort();
    this.port2 = new MessagePort();
    this.port1.setOtherPort(this.port2);
    this.port2.setOtherPort(this.port1);
  }
}

class MessagePort {
  constructor() {
    this.otherPort = null;
    this.listeners = new Map();
  }

  setOtherPort(otherPort) {
    this.otherPort = otherPort;
  }

  addEventListener(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(listener);
  }

  removeEventListener(event, listener) {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      const index = eventListeners.indexOf(listener);
      if (index !== -1) {
        eventListeners.splice(index, 1);
      }
    }
  }

  postMessage(data) {
    this.otherPort.dispatchEvent("message", { data });
  }

  start() {
    // No-op in React Native
  }

  dispatchEvent(event, data) {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach((listener) => listener(data));
    }
  }
}

export default MessageChannel;
