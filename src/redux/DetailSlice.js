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
    openErrorModal: false,
  },
  reducers: {
    closeDetailModal: (state) => {
      state.openDetailModal = false;
    },
    closeErrorModal: (state) => {
      state.openErrorModal = false;
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
        state.error = action.payload;
        state.openErrorModal = true;
      });
  },
});

export const { closeDetailModal, viewDetails, closeErrorModal } =
  detailsSlice.actions;
export default detailsSlice.reducer;
