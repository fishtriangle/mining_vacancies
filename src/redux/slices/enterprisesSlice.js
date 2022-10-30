import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null,
  currentNews: null,
};

export const enterprisesSlice = createSlice({
  name: 'enterprises',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = Number(action.payload);
    },
    setCurrentNews: (state, action) => {
      state.currentNews = Number(action.payload);
    },
  },
});

export const selectCurrentEnterprise = (state) => state.enterprisesInfo.current;
export const selectCurrentNews = (state) => state.enterprisesInfo.currentNews;

export const { setCurrent, setCurrentNews } = enterprisesSlice.actions;

export default enterprisesSlice.reducer;
