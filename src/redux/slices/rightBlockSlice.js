import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHide: false,
  blockType: "intro",
  blockContent: null,
};

export const rightBlockSlice = createSlice({
  name: "rightBlock",
  initialState,
  reducers: {
    hideRightBlock: (state) => {
      state.isHide = true;
    },
    showRightBlock: (state) => {
      state.isHide = false;
    },
    setIntro: (state) => {
      state.blockType = "intro";
    },
    setEnterprise: (state) => {
      state.blockType = "enterprise";
    },
    setBlockContent: (state, action) => {
      state.blockContent = action.payload;
    },
    resetBlockContent: (state) => {
      state.blockContent = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  hideRightBlock,
  showRightBlock,
  setIntro,
  setEnterprise,
  setBlockContent,
  resetBlockContent,
} = rightBlockSlice.actions;

export default rightBlockSlice.reducer;
