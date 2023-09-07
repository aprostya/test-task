import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../components/Filters/slices/filterSlice';

const store = configureStore({
  reducer: {
    filters: filterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
