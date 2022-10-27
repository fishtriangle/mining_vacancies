import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

import ametist from '../../assets/Ametistovoe/information';
import asacha from '../../assets/Asachinskoe/information';
import baranjevskoe from '../../assets/Baranjevskoe/information';
import aginskoe from '../../assets/Aginskoe/information';
// import ksm from '../../assets/Kamchatstroymateriali/information';
// import kymroch from '../../assets/Kymroch/information';

const initialState = {
  enterprises: {
    ametist: { ..._.cloneDeep(ametist), vacancies: null },
    asacha: { ..._.cloneDeep(asacha), vacancies: null },
    baranjevskoe: { ..._.cloneDeep(baranjevskoe), vacancies: null },
    aginskoe: { ..._.cloneDeep(aginskoe), vacancies: null },
    // ksm: { ..._.cloneDeep(ksm), vacancies: null },
    // kymroch: { ..._.cloneDeep(kymroch), vacancies: null },
  },
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

export const { setCurrent } = enterprisesSlice.actions;

export default enterprisesSlice.reducer;
