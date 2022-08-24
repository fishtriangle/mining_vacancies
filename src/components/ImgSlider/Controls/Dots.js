import React, { useContext } from "react";
import { SliderContext } from "../ImgSlider";
import Dot from "./Dot";

import styles from "./Dots.module.scss";

export default function Dots() {
  const { slidesCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className={styles.dots}>{renderDots()}</div>;
}
