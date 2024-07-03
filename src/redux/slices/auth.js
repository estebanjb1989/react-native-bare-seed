import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    signUp(state, action) {
      const { name, secretKeyHex, publicKey } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.user = { name, secretKeyHex, publicKey };
    },
    signIn(state, action) {
      const { name, secretKeyHex, publicKey } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.user = { name, secretKeyHex, publicKey };
    },
    signOut(state) {
      state.user = null;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { signUp, signIn, signOut } = authSlice.actions;

// Export the slice reducer as the default export
export default authSlice.reducer;
