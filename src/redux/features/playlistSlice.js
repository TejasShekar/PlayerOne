import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  playlists: [],
  isLoading: false,
  isModalOpen: false,
};

export const createPlaylist = createAsyncThunk(
  "playlist/createPlaylist",
  async (playlistTitle, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        {
          playlist: {
            title: playlistTitle,
          },
        },
        {
          headers: {
            authorization: localStorage.getItem("p1_token"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("An error occured while creating the playlist");
    }
  }
);

export const addVideoToPlaylist = createAsyncThunk(
  "playlist/addVideoToPlaylist",
  async ({id, video}, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${id}`,
        {video},
        {
          headers: {
            authorization: localStorage.getItem("p1_token"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("An error occured while adding video to the playlist");
    }
  }
);

export const removeVideoFromPlaylist = createAsyncThunk(
  "playlist/removeVideoFromPlaylist",
  async ({videoId, playlistId}, {rejectWithValue}) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: localStorage.getItem("p1_token"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("An error occured while removing video to the playlist");
    }
  }
);

export const removePlaylist = createAsyncThunk(
  "playlist/removePlaylist",
  async (playlistId, {rejectWithValue}) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: localStorage.getItem("p1_token"),
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue("An error occured while removing the playlist");
    }
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setIsModalOpen: (state, {payload}) => {
      state.isModalOpen = payload;
    },
  },
  extraReducers: {
    [createPlaylist.rejected]: (state) => {
      state.isLoading = false;
    },
    [createPlaylist.pending]: (state) => {
      state.isLoading = true;
    },
    [createPlaylist.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.playlists = payload.playlists;
    },
    [removePlaylist.pending]: (state) => {
      state.isLoading = true;
    },
    [removePlaylist.rejected]: (state) => {
      state.isLoading = false;
    },
    [removePlaylist.fulfilled]: (state, {payload}) => {
      state.playlists = payload.playlists;
      state.isLoading = false;
    },
    [addVideoToPlaylist.pending]: (state) => {
      state.isLoading = true;
    },
    [addVideoToPlaylist.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.playlists = state.playlists.map((playlist) =>
        playlist._id === payload.playlist._id ? payload.playlist : playlist
      );
    },
    [addVideoToPlaylist.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeVideoFromPlaylist.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeVideoFromPlaylist.pending]: (state) => {
      state.isLoading = true;
    },
    [removeVideoFromPlaylist.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.playlists = state.playlists.map((playlist) =>
        playlist._id === payload.playlist._id ? payload.playlist : playlist
      );
    },
  },
});
export const {setIsModalOpen} = playlistSlice.actions;
export default playlistSlice.reducer;
