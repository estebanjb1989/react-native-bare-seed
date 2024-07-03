import "react-native-get-random-values";
import "text-encoding-polyfill";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import MessageChannel from "./src/helpers/MessageChannel";
import store, { persistor } from "./src/redux/store";
import Navigation from "./src/navigation";

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
