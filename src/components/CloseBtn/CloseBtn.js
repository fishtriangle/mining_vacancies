import { useDispatch } from 'react-redux';

import closeBtnImg from '../EnterpriseBlock/img/close.png';
import styles from './CloseBtn.module.scss';
import {
  hideRightBlock,
  setIntro,
  showRightBlock,
} from '../../redux/slices/rightBlockSlice';
import { setCurrent } from '../../redux/slices/enterprisesSlice';

const CloseBtn = ({ closeAction }) => {
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
        className={`align-self-start ${styles.closeBtn}`}
        onClick={handleClose}
      />
    </div>
  );
};
export default CloseBtn;
