import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../types/word';

export interface DictionaryState {
  word: Word;
  isLoading: boolean;
}

const initialState: DictionaryState = {
  word: {} as Word,
  isLoading: false,
};

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<Word>) => {
      state.word = action.payload;
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setWord, setIsLoading } = dictionarySlice.actions;

export default dictionarySlice.reducer;
