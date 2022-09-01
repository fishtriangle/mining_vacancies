import { useSelector } from "react-redux";

import styles from "./RightSlidingBlock.module.scss";
import IntroBlock from "../IntroBlock/IntroBlock";
import EnterpriseBlock from "../EnterpriseBlock/EnterpriseBlock";

function RightSlidingBlock() {
  const isHide = useSelector((state) => state.rightBlock.isHide);
  const blockType = useSelector((state) => state.rightBlock.blockType);

  const blockMap = {
    intro: <IntroBlock />,
    enterprise: <EnterpriseBlock />,
  };

  return (
    <div
      className={`${styles.rightSlidingBlock} ${
        isHide && styles.rightSlidingBlock__closed
      }`}
    >
      {blockMap[blockType]}
    </div>
  );
}

export default RightSlidingBlock;
