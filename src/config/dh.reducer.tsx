import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/add";
const initialState = {
  loading: false,
  error: false,
  empty: true,
};

export type registerState = Readonly<typeof initialState>;

export const register = createAsyncThunk("register/register", async () => {
  return axios.post<any>(url, {});
});
export const RegisterSlice = createSlice({
  name: "loanRequest",
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

      console.log(action.payload.data);
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
