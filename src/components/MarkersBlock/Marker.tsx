import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Marker.module.scss';
import leftCorner from './left.png';
import rightCorner from './right.png';
import {
  hideRightBlock,
  showRightBlock,
  setEnterprise,
  selectRightBlockIsHide,
} from '../../redux/slices/rightBlockSlice';
import {
  selectCurrentEnterprise,
  setCurrent,
} from '../../redux/slices/enterprisesSlice';

type Position = {
  top: number;
  left: number;
};

type MarkerProps = {
  value: string;
  position: Position;
  corner: 'left' | 'right';
  id: number;
};

const Marker: React.FC<MarkerProps> = ({ value, position, corner, id }) => {
  const [width, setWidth] = useState(0);
  const markerLabel = useRef<HTMLParagraphElement>(null);
  const dispatch = useDispatch();
  const isClosed = useSelector(selectRightBlockIsHide);

  function handleClick(id: number) {
    dispatch(hideRightBlock());
    setTimeout(() => {
      dispatch(setEnterprise());
      dispatch(setCurrent(id));
      dispatch(showRightBlock());
    }, 1500);
  }

  const currentEnterprise = useSelector(selectCurrentEnterprise);
  const currentId = currentEnterprise?.id;

  useEffect(() => {
    if (width === 0) {
      setWidth(markerLabel?.current?.clientWidth || 0);
    }
  }, [width]);

  const labelParams = {
    left: {
      containerStyle: (position: Position) => ({
        top: `calc(${position.top}% - 16px)`,
        left: `${position.left}%`,
      }),
      labelStyle: {
        borderBottomLeftRadius: '0',
      },
      imgSrc: leftCorner,
      imgClassName: styles.markersBlock_leftCorner,
    },
    right: {
      containerStyle: (position: Position) => ({
        top: `calc(${position.top}% - 16px)`,
        left: `calc(${position.left}% - ${width}px)`,
      }),
      labelStyle: {
        borderBottomRightRadius: '0',
      },
      imgSrc: rightCorner,
      imgClassName: styles.markersBlock_rightCorner,
    },
  };

  return (
    <div
      className={`position-absolute ${styles.markersBlock_marker} ${
        id === currentId && styles.markersBlock_marker__checked
      }`}
      style={labelParams[corner].containerStyle(position)}
      onClick={() => !isClosed && id !== currentId && handleClick(id)}
    >
      <p
        className={`text-dark fw-bold ${styles.markersBlock_label}`}
        style={labelParams[corner].labelStyle}
        ref={markerLabel}
      >
        {value}
      </p>
      <img
        src={labelParams[corner].imgSrc}
        alt={'Маркер'}
        className={labelParams[corner].imgClassName}
      />
    </div>
  );
};

export default Marker;
