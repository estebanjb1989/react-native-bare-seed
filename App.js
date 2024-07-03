import "react-native-get-random-values";
import "text-encoding-polyfill";
import { Provider } from "react-redux";
import MessageChannel from "./src/helpers/MessageChannel";
import { store } from "./src/redux/store";
import Navigation from "./src/navigation";

global.MessageChannel = MessageChannel;

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
