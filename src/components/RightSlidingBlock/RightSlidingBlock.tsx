import React from 'react';
import { useSelector } from 'react-redux';

import styles from './RightSlidingBlock.module.scss';
import IntroBlock from '../IntroBlock/IntroBlock';
import EnterpriseBlock from '../EnterpriseBlock/EnterpriseBlock';
import {
  selectRightBlockIsHide,
  selectType,
} from '../../redux/slices/rightBlockSlice';
import AboutBlock from '../AboutBlock/AboutBlock';
import NewsBlock from '../NewsBlock/NewsBlock';
import NewsItemBlock from '../NewsItemBlock/NewsItemBlock';

const RightSlidingBlock: React.FC = () => {
  const isHide = useSelector(selectRightBlockIsHide);
  const blockType: 'intro' | 'enterprise' | 'about' | 'news' | 'newsItem' =
    useSelector(selectType);

  const blockMap = {
    intro: <IntroBlock />,
    enterprise: <EnterpriseBlock />,
    about: <AboutBlock />,
    news: <NewsBlock />,
    newsItem: <NewsItemBlock />,
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
};

export default RightSlidingBlock;
