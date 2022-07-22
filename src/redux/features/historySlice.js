import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  history: [],
  isLoading: false,
  error: null,
};

export const addToHistory = createAsyncThunk(
  "history/addToHistory",
  async (video, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        "/api/user/history",
        {video},
        {
          headers: {
            authorization: localStorage.getItem("p1_token"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Cannot add to history right now!");
    }
  }
);

export const removeFromHistory = createAsyncThunk(
  "history/removeFromHistory",
  async (id, {rejectWithValue}) => {
    try {
      const response = await axios.delete(`/api/user/history/${id}`, {
        headers: {
          authorization: localStorage.getItem("p1_token"),
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue("Cannot remove from history right now!");
    }
  }
);

export const removeAllVideosFromHistory = createAsyncThunk(
  "history/removeAllVideosFromHistory",
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.delete(`/api/user/history/all`, {
        headers: {
          authorization: localStorage.getItem("p1_token"),
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue("Cannot remove from history right now!");
    }
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [addToHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [addToHistory.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.history = payload.history;
    },
    [addToHistory.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeFromHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [removeFromHistory.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.history = payload.history;
    },
    [removeFromHistory.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeAllVideosFromHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [removeAllVideosFromHistory.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.history = payload.history;
    },
    [removeAllVideosFromHistory.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default historySlice.reducer;
