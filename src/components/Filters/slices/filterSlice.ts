import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IFilter } from '../types/filter';
import { API_ROUTES } from '../../../utils/enums';

type IFilterList = { list: Array<IFilter>; selectedFilter: string };

const initialState: IFilterList = {
  list: [],
  selectedFilter: '',
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
    changeSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilterData.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default filterSlice.reducer;
