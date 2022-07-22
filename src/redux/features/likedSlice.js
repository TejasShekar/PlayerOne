import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  likedVideos: [],
  isLoading: false,
  error: null,
};

export const addToLikedVideos = createAsyncThunk(
  "liked/addToLikedVideos",
  async (video, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        {video},
        {
          headers: {
            authorization: localStorage.getItem("p1_token"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Cannot add to liked videos right now!");
    }
  }
);

export const removeFromLikedVideos = createAsyncThunk(
  "liked/removeFromLikedVideos",
  async (id, {rejectWithValue}) => {
    try {
      const response = await axios.delete(`/api/user/likes/${id}`, {
        headers: {
          authorization: localStorage.getItem("p1_token"),
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue("Cannot delete from liked video right now!");
    }
  }
);

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {},
  extraReducers: {
    [addToLikedVideos.pending]: (state) => {
      state.isLoading = true;
    },
    [addToLikedVideos.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.likedVideos = payload.likes.reverse();
    },
    [addToLikedVideos.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeFromLikedVideos.pending]: (state) => {
      state.isLoading = true;
    },
    [removeFromLikedVideos.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.likedVideos = payload.likes;
    },
    [removeFromLikedVideos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default likedSlice.reducer;
