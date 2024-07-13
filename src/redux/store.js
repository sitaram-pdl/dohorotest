import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './DetailSlice';
import itemsReducer from './ItemSlice';

export const store = configureStore({
  reducer: {
    details: detailsReducer,
    items: itemsReducer,
  },
});
