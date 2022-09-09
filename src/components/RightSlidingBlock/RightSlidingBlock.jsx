import { useSelector } from 'react-redux';

import styles from './RightSlidingBlock.module.scss';
import IntroBlock from '../IntroBlock/IntroBlock';
import EnterpriseBlock from '../EnterpriseBlock/EnterpriseBlock';
import {
  selectRightBlockIsHide,
  selectType,
} from '../../redux/slices/rightBlockSlice';
import AboutBlock from '../AboutBlock/AboutBlock';

function RightSlidingBlock() {
  const isHide = useSelector(selectRightBlockIsHide);
  const blockType = useSelector(selectType);

  const blockMap = {
    intro: <IntroBlock />,
    enterprise: <EnterpriseBlock />,
    about: <AboutBlock />,
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
