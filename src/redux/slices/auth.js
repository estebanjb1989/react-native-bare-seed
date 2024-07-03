import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    signedUp(state, action) {
      const { name, secretKeyHex, publicKey } = action.payload;
      state.user = { name, secretKeyHex, publicKey };
    },
    signedIn(state, action) {
      const { name, secretKeyHex, publicKey } = action.payload;
      state.user = { name, secretKeyHex, publicKey };
    },
    signedOut(state) {
      state.user = null;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { signedUp, signedIn, signedOut } = authSlice.actions;

// Export the slice reducer as the default export
export default authSlice.reducer;
