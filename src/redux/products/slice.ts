import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProductItem } from './types';
import { API_ROUTES } from '../../utils/enums';

type ICardsList = { cardList: Array<IProductItem> };

const initialState: ICardsList = {
  cardList: [],
};

export const fetchCardData = createAsyncThunk(
  'filters/fetchCardData',
  async () => {
    const response = await axios.get(API_ROUTES.CARDS);
    return response.data;
  },
);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardData.fulfilled, (state, action) => {
      state.cardList = action.payload;
    });
  },
});

export default cardSlice.reducer;
