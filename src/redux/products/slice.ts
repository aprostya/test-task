import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProductItem, IProductSearchParams } from './types';
import { API_ROUTES } from '../../utils/enums';
import { STATUSES } from '../../types/type';

type ICardsList = { cardList: Array<IProductItem>; status: STATUSES };

const initialState: ICardsList = {
  cardList: [],
  status: STATUSES.LOADING,
};

export const fetchCardData = createAsyncThunk(
  'filters/fetchCardData',
  async (params: IProductSearchParams) => {
    const { searchValue } = params;
    const response = await axios.get(
      `${API_ROUTES.CARDS}?search=${searchValue}`,
    );
    return response.data;
  },
);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardData.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.cardList = [];
    });
    builder.addCase(fetchCardData.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS;
      state.cardList = action.payload;
    });
    builder.addCase(fetchCardData.rejected, (state) => {
      state.status = STATUSES.ERROR;
      state.cardList = [];
    });
  },
});

export default cardSlice.reducer;
