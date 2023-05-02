import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  font: 'Inter',
};

const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    setFont: (state, action: PayloadAction<string>) => {
      state.font = action.payload;
    },
  },
});

export const { setFont } = fontSlice.actions;

// epxort initial state

export default fontSlice.reducer;
