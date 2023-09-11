import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProductItem } from '../types/card';
import { API_ROUTES } from '../../../utils/enums';

type ICardsList = { cardList: Array<IProductItem> };

const initialState: ICardsList = {
  cardList: [],
};

export const fetchFilterData = createAsyncThunk(
  'filters/fetchCardData',
  async () => {
    const response = await axios.get(API_ROUTES.FILTERS);
    return response.data;
  },
);

const filterSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilterData.fulfilled, (state, action) => {
      state.cardList = action.payload;
    });
  },
});

export default filterSlice.reducer;
