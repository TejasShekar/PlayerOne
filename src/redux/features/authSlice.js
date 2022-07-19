import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: JSON.parse(localStorage.getItem("p1_userData")) ?? null,
  token: localStorage.getItem("p1_token") ?? null,
  isLoading: false,
  error: null,
};

export const userLogin = createAsyncThunk(
  "auth/login",
  async (loginData, {rejectWithValue}) => {
    try {
      const {
        data: {foundUser, encodedToken},
      } = await axios.post("/api/auth/login", loginData);
      localStorage.setItem("p1_token", encodedToken);
      localStorage.setItem("p1_userData", JSON.stringify(foundUser));
      return {foundUser, encodedToken};
    } catch (error) {
      return rejectWithValue("Invalid Credentials. Try again !");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state, {payload}) => {
      state.error = "";
      state.isLoading = false;
      state.userData = payload.foundUser;
      state.token = payload.encodedToken;
    },
    [userLogin.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.token = "";
      state.userData = null;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
