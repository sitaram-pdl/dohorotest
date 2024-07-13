import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItemInTable: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItemInTable, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
