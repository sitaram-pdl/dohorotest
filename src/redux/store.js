import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './DetailSlice';

export const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});
