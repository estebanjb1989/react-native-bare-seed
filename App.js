import "react-native-get-random-values";
import "text-encoding-polyfill";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Navigation from "./src/navigation";

class MessageChannel {
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

global.MessageChannel = MessageChannel;

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
