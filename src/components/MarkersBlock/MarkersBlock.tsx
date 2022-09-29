import React from 'react';
import Marker from './Marker';
import { useSelector } from 'react-redux';

import styles from './MarkersBlock.module.scss';

type PhotoItem = {
  small: string;
  large?: string;
  alt?: string;
};

type PositionItem = {
  top: number;
  left: number;
};

type MarkerItem = {
  value: string;
  position: PositionItem;
  corner?: string;
};

type EnterprisesInfoItem = {
  id: number;
  title?: string;
  photos?: PhotoItem[];
  logo?: string;
  marker?: MarkerItem;
  contacts?: string[];
};

const MarkersBlock: React.FC = () => {
  const enterprisesInfo: EnterprisesInfoItem = useSelector(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: set the type of state
    (state) => state.enterprisesInfo.enterprises
  );

  return (
    <div className={styles.markersBlock}>
      {Object.values(enterprisesInfo).map(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // TODO: set the type of enterprisesInfo
        ({ id, marker: { value, position, corner } }, index) => (
          <Marker
            value={value}
            position={position}
            corner={corner}
            key={index}
            id={id}
          />
        )
      )}
    </div>
  );
};

export default MarkersBlock;
