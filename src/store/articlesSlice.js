import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page, searchTerm }) => {
    const response = await axios.get(`${BASE_URL}/news`, {
      params: {
        category,
        page,
        searchTerm,
      },
    });
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    loading: false,
    error: null,
    totalResults: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
