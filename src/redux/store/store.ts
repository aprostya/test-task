import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../filters/slice';
import cardSlice from '../products/slice';

const store = configureStore({
  reducer: {
    filters: filterSlice,
    cards: cardSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
