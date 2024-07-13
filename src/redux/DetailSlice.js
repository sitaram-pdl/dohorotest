import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const extractDetails = createAsyncThunk(
  'details/extractDetails',
  async (imageUrl) => {
    const response = await axios.post(
      'https://openai-api.karmalive.pro/extract-details',
      { url: imageUrl }
    );
    return response.data;
  }
);

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    details: [],
    status: null,
    error: null,
  },
  reducers: {
    addDetail: (state, action) => {
      state.details.push(action.payload);
    },
  },
});

export const { addDetail } = detailsSlice.actions;
export default detailsSlice.reducer;
