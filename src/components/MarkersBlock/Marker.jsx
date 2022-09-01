import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Marker.module.scss";
import leftCorner from "./left.png";
import rightCorner from "./right.png";
import {
  hideRightBlock,
  showRightBlock,
  setEnterprise,
  selectRightBlockIsHide,
} from "../../redux/slices/rightBlockSlice";
import { setCurrent } from "../../redux/slices/enterprisesSlice";

function Marker({ value, position, corner, id }) {
  const [width, setWidth] = useState(0);
  const markerLabel = useRef();
  const dispatch = useDispatch();
  const isClosed = useSelector(selectRightBlockIsHide);

  function handleClick(id) {
    dispatch(hideRightBlock());
    setTimeout(() => {
      dispatch(setEnterprise());
      dispatch(setCurrent(id));
      dispatch(showRightBlock());
    }, 1500);
  }

  useEffect(() => {
    if (width === 0) {
      setWidth(markerLabel?.current?.clientWidth || 0);
    }
  }, [width]);

  const labelParams = {
    left: {
      containerStyle: (position) => ({
        top: `calc(${position.top}% - 16px)`,
        left: `${position.left}%`,
      }),
      labelStyle: {
        borderBottomLeftRadius: "0",
      },
      imgSrc: leftCorner,
      imgClassName: styles.markersBlock_leftCorner,
    },
    right: {
      containerStyle: (position) => ({
        top: `calc(${position.top}% - 16px)`,
        left: `calc(${position.left}% - ${width}px)`,
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
      onClick={() => !isClosed && handleClick(id)}
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
