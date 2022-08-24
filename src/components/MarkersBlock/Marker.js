import styles from "./Marker.module.scss";
import leftCorner from "./left.png";
import rightCorner from "./right.png";
import { useEffect, useRef, useState } from "react";

function Marker({ value, position, corner, id }) {
  const [width, setWidth] = useState(0);
  const markerLabel = useRef();

  function handleClick(id) {
    console.log(id);
    // !!! change global params to make actions
  }

  useEffect(() => {
    if (width === 0) {
      setWidth(markerLabel?.current?.clientWidth || 0);
    }
  }, [width]);

  const labelParams = {
    left: {
      containerStyle: (position) => ({
        top: `${position.top}px`,
        left: `${position.left}px`,
      }),
      labelStyle: {
        borderBottomLeftRadius: "0",
      },
      imgSrc: leftCorner,
      imgClassName: styles.markersBlock_leftCorner,
    },
    right: {
      containerStyle: (position) => ({
        top: `${position.top}px`,
        left: `${position.left - width}px`,
      }),
      labelStyle: {
        borderBottomRightRadius: "0",
      },
      imgSrc: rightCorner,
      imgClassName: styles.markersBlock_rightCorner,
    },
  };

  return (
    <div
      className={`position-absolute`}
      style={labelParams[corner].containerStyle(position)}
      // onClick={() => handleClick(id)}
      onTouchEnd={() => handleClick(id)}
    >
      <p
        className={`text-dark fw-bold ${styles.markersBlock_marker}`}
        style={labelParams[corner].labelStyle}
        ref={markerLabel}
      >
        {value}
      </p>
      <img
        src={labelParams[corner].imgSrc}
        alt={"Маркер"}
        className={labelParams[corner].imgClassName}
      />
    </div>
  );
}

export default Marker;
