import React from "react";
import "react-native-get-random-values";
import "text-encoding-polyfill";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import MessageChannel from "@helpers/MessageChannel";
import store, { persistor } from "@store/store";
import Navigation from "@navigation";

// eslint-disable-next-line no-undef
global.MessageChannel = MessageChannel;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
