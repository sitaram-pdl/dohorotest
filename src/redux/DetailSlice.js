import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const extractDetails = createAsyncThunk(
  'details/extractDetails',
  async (imageUrl, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/extract-details', {
        image_url: imageUrl,
      });
      let detail = JSON.parse(response.data.processed_text);
      return { ...detail, id: imageUrl };
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data.error || error);
    }
  }
);
const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    details: null,
    status: null,
    error: null,
    openDetailModal: false,
  },
  reducers: {
    closeDetailModal: (state) => {
      state.openDetailModal = false;
    },
    viewDetails: (state, payload) => {
      state.details = payload.payload;
      state.openDetailModal = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(extractDetails.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(extractDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = action.payload;
        state.isThereDetails = true;
        state.openDetailModal = true;
        state.error = null;
      })
      .addCase(extractDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.isThereDetails = false;
        state.error = action.payload;
      });
  },
});

export const { closeDetailModal, viewDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
