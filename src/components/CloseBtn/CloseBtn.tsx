import { useDispatch } from 'react-redux';
import React from 'react';

import closeBtnImg from './close.png';
import styles from './CloseBtn.module.scss';
import {
  hideRightBlock,
  setIntro,
  showRightBlock,
} from '../../redux/slices/rightBlockSlice';
import { setCurrent } from '../../redux/slices/enterprisesSlice';

type CloseBtnProps = {
  closeAction?: () => void;
  classNames?: string;
};

const CloseBtn: React.FC<CloseBtnProps> = ({ closeAction, classNames }) => {
  const dispatch = useDispatch();

  function handleClose() {
    if (!closeAction) {
      dispatch(hideRightBlock());
      setTimeout(() => {
        dispatch(setCurrent({ id: null }));
        dispatch(setIntro());
        dispatch(showRightBlock());
      }, 1500);
    } else {
      closeAction();
    }
  }

  return (
    <div>
      <img
        src={closeBtnImg}
        alt={'Close button'}
        className={`align-self-start ${styles.closeBtn} ${classNames}`}
        onClick={handleClose}
      />
    </div>
  );
};
export default CloseBtn;
