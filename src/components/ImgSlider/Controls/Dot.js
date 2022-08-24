import React, { useContext } from "react";
import { SliderContext } from "../ImgSlider";

import styles from "./Dot.module.scss";

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`${styles.dot} ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}
