import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themeSlice';
import dictionaryReducer from '../features/dictionarySlice';
import fontReducer from '../features/fontSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    dictionary: dictionaryReducer,
    font: fontReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
