import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilter } from './types';
import { API_ROUTES } from '../../utils/enums';

type IFilters = { list: Array<IFilter>; searchValue: string };

const initialState: IFilters = {
  list: [],
  searchValue: '',
};

export const fetchFilterData = createAsyncThunk(
  'filters/fetchFilterData',
  async () => {
    const response = await axios.get(API_ROUTES.FILTERS);
    return response.data;
  },
);

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFilterData.fulfilled,
      (state, action: PayloadAction<Array<IFilter>>) => {
        state.list = action.payload;
      },
    );
  },
});

export const { changeSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
