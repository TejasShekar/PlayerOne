import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideo",
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get("/api/videos");
      return response.data.videos;
    } catch (error) {
      return rejectWithValue("Failed to fetch videos right now");
    }
  }
);

const initialState = {
  videosData: [],
  selectedCategory: "All",
  isLoading: false,
  error: null,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchVideos.pending]: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    [fetchVideos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videosData = action.payload;
    },
    [fetchVideos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default videoSlice.reducer;
export const {filterByCategory} = videoSlice.actions;
