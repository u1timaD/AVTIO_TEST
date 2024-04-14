import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk(
  'movie/fetchMoviesStatus',
  async ({ token, urlParamsData }) => {
    try {
      let url = 'https://api.kinopoisk.dev/v1.4/movie';
      if (urlParamsData) {
        url += urlParamsData;
      }
      const { data } = await axios.get(url, {
        headers: {
          'X-API-KEY': token,
        },
      });
      return data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  isLoading: true,
  initialState: {
    items: [],
    pageNumber: 1,
    status: 'loading', // loading | success | error
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setItems, setPageNumber } = movieSlice.actions;
export default movieSlice.reducer;
