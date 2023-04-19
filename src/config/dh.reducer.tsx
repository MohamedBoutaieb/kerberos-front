import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DhService } from "../services/dh.service";
import { getDiffieHellman } from "crypto";
const url = "http://localhost:5001/";
const initialState = {
  loading: false,
  error: false,
  empty: true,
  publicKey: "",
  hash: "",
};

export type registerState = Readonly<typeof initialState>;
const dhService :DhService = new DhService();
export const register = createAsyncThunk("register/register", async (payload:{
  username: string,
  publicKey: string,
  group: string,
  encoding: string,
}) => {
  return axios.post<any>(url+"user/dh", payload);
});
export const RegisterSlice = createSlice({
  name: "signup",
  initialState: initialState as registerState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.empty = false;
      state.publicKey = action.payload.data.pubKey;

    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { reset } = RegisterSlice.actions;
export default RegisterSlice.reducer;