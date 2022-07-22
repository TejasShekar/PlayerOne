import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  watchLaterVideos: [],
  isLoading: false,
  error: null,
};

export const addToWatchLater = createAsyncThunk(
  "watchLater/addToWatchLater",
  async (video, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        {video},
        {
          headers: {
            authorization: localStorage.getItem("p1_token"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Cannot add to watch later right now!");
    }
  }
);

export const removeFromWatchLater = createAsyncThunk(
  "watchLater/removeFromWatchLater",
  async (id, {rejectWithValue}) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: {
          authorization: localStorage.getItem("p1_token"),
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue("Cannot remove from watch later right now!");
    }
  }
);

export const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  reducers: {},
  extraReducers: {
    [addToWatchLater.pending]: (state) => {
      state.isLoading = true;
    },
    [addToWatchLater.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.watchLaterVideos = payload.watchlater.reverse();
    },
    [addToWatchLater.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeFromWatchLater.pending]: (state) => {
      state.isLoading = true;
    },
    [removeFromWatchLater.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.watchLaterVideos = payload.watchlater;
    },
    [removeFromWatchLater.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default watchLaterSlice.reducer;
