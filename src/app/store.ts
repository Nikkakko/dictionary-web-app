import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themeSlice';
import dictionaryReducer from '../features/dictionarySlice';
import fontReducer from '../features/fontSlice';
import { wordApi } from '../services/useGetWordQuery';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    dictionary: dictionaryReducer,
    font: fontReducer,

    [wordApi.reducerPath]: wordApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(wordApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
