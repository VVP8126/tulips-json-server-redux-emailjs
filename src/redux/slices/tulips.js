import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllTulips, fetchTulipById } from '../../serverApi/api';

const initialState = {
  tulips: [],
  tulip: null,
  loading: false,
  error: null,
};

export const fetchTulips = createAsyncThunk('tulips/fetchAllTulips', async () => {
  const response = await fetchAllTulips();
  return response.data;
});

export const fetchTulip = createAsyncThunk('tulips/fetchTulipById', async (id) => {
  const response = await fetchTulipById(id);
  return response.data;
});

const tulipSlice = createSlice({
  name: 'tulips',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all Tulips
    builder.addCase(fetchTulips.fulfilled, (state, action) => {
      state.tulips = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(fetchTulips.pending, (state) => {
      state.tulips = [];
      state.loading = true;
    });
    builder.addCase(fetchTulips.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    // Fetch Single Tulip
    builder.addCase(fetchTulip.fulfilled, (state, action) => {
      state.tulip = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(fetchTulip.pending, (state) => {
      state.loading = true;
      state.tulip = null;
    });
    builder.addCase(fetchTulip.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const tulipReducer = tulipSlice.reducer;
