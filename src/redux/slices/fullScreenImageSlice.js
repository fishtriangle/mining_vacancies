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

export const selectImage = (state) => state.fullScreenImage;
export const selectAlt = (state) => state.fullScreenImage.alt;
export const selectImageIsShown = (state) => state.fullScreenImage.isImageShown;

export const { setImage, resetImage, showImage } = fullScreenImage.actions;

export default fullScreenImage.reducer;
