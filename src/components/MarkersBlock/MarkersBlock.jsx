import Marker from "./Marker";
import { useSelector } from "react-redux";

import styles from "./MarkersBlock.module.scss";

function MarkersBlock() {
  const enterprisesInfo = useSelector(
    (state) => state.enterprisesInfo.enterprises
  );
  return (
    <div className={styles.markersBlock}>
      {Object.values(enterprisesInfo).map(
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
}

export default MarkersBlock;
