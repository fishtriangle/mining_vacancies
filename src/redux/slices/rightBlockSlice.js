import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHide: false,
  blockType: 'intro',
};

export const rightBlockSlice = createSlice({
  name: 'rightBlock',
  initialState,
  reducers: {
    hideRightBlock: (state) => {
      state.isHide = true;
    },
    showRightBlock: (state) => {
      state.isHide = false;
    },
    setIntro: (state) => {
      state.blockType = 'intro';
    },
    setEnterprise: (state) => {
      state.blockType = 'enterprise';
    },
    setAbout: (state) => {
      state.blockType = 'about';
    },
    setNews: (state) => {
      state.blockType = 'news';
    },
    setNewsItem: (state) => {
      state.blockType = 'newsItem';
    },
  },
});

export const selectRightBlockIsHide = (state) => state.rightBlock.isHide;
export const selectType = (state) => state.rightBlock.blockType;

export const {
  hideRightBlock,
  showRightBlock,
  setIntro,
  setEnterprise,
  setAbout,
  setNews,
  setNewsItem,
} = rightBlockSlice.actions;

export default rightBlockSlice.reducer;
