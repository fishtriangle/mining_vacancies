import React, { useContext } from "react";
import { SliderContext } from "../ImgSlider";

import styles from "./Arrows.module.scss";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className={styles.arrow}>
      <div className="arrow left" onClick={() => changeSlide(-1)} />
      <div className="arrow right" onClick={() => changeSlide(1)} />
    </div>
  );
}
