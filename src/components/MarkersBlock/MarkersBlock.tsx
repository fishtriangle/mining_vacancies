import React from 'react';
import Marker from './Marker';
import { useSelector } from 'react-redux';

import styles from './MarkersBlock.module.scss';

const MarkersBlock: React.FC = () => {
  const enterprisesInfo = useSelector(
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
