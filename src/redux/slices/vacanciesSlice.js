import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentId: null,
  isVacanciesShown: false,
};

export const vacancies = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
    showVacancies: (state) => {
      state.isVacanciesShown = true;
    },
    resetVacancies: (state) => {
      state.isVacanciesShown = false;
      state.currentId = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentId, showVacancies, resetVacancies } =
  vacancies.actions;

export default vacancies.reducer;
