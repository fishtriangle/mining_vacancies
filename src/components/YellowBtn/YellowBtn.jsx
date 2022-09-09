import styles from './YellowBtn.module.scss';

const YellowBtn = ({ text, onClick }) => {
  return (
    <div className={styles.yellowBtn}>
      <span onClick={() => onClick()}>{text}</span>
    </div>
  );
};

export default YellowBtn;
