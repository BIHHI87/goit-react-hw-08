import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeNameFilter(state, { payload }) {
      state.name = payload.toString();
    },
    changeNumberFilter(state, { payload }) {
      state.number = payload.toString();
    },
  },
});

export const { changeNameFilter, changeNumberFilter } = filtersSlice.actions;

export default filtersSlice.reducer;