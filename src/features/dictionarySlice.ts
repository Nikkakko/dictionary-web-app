import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../types/word';

export interface DictionaryState {
  word: Word;
}

const initialState: DictionaryState = {
  word: {} as Word,
};

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<Word>) => {
      state.word = action.payload;
    },
  },
});

export const { setWord } = dictionarySlice.actions;

export default dictionarySlice.reducer;
