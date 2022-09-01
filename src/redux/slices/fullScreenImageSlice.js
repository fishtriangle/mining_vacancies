import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null,
  alt: null,
  isImageShown: false,
};

export const fullScreenImage = createSlice({
  name: "fullScreenImage",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload.image;
      state.alt = action.payload.alt;
    },
    resetImage: (state) => {
      state.image = null;
      state.alt = null;
      state.isImageShown = false;
    },
    showImage: (state) => {
      state.isImageShown = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImage, resetImage, showImage } = fullScreenImage.actions;

export default fullScreenImage.reducer;
