import { configureStore } from "@reduxjs/toolkit";
import rightBlock from "./slices/rightBlockSlice";
import enterprisesInfo from "./slices/enterprisesSlice";
import fullScreenImage from "./slices/fullScreenImageSlice";
import vacancies from "./slices/vacanciesSlice";

export const store = configureStore({
  reducer: {
    rightBlock,
    enterprisesInfo,
    fullScreenImage,
    vacancies,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
