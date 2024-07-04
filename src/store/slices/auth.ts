import { createSlice } from "@reduxjs/toolkit";
import { IAuthUser } from "src/interfaces";

interface IState {
  user: IAuthUser | null;
}

const initialState: IState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
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

export const { signedUp, signedIn, signedOut } = authSlice.actions;

export default authSlice.reducer;
