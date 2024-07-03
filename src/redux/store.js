import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

// Automatically adds the thunk middleware and the Redux DevTools extension
export default configureStore({
  // Automatically calls `combineReducers`
  reducer: rootReducer,
});
