import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const extractDetails = createAsyncThunk(
  'details/extractDetails',
  async (imageUrl, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/extract-details', {
        image_url: imageUrl,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error || error);
    }
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
  extraReducers: (builder) => {
    builder
      .addCase(extractDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(extractDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log();
        state.details = action.payload;
      })
      .addCase(extractDetails.rejected, (state, action) => {
        state.status = 'failed';

        state.error = action.payload;
      });
  },
});

export const { addDetail } = detailsSlice.actions;
export default detailsSlice.reducer;
