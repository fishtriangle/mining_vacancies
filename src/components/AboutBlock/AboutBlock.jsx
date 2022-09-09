import styles from './AboutBlock.module.scss';
import logo from './highland_logo.png';
import CloseBtn from '../CloseBtn/CloseBtn';
import { useState } from 'react';

const missions = {
  mission: 'Золото – вечная ценность Земли. Мы имеем честь нести её людям.',
  values:
    'Объединяя успешных, мы бережно и ответственно добываем богатства недр, развиваем регионы, повышаем благосостояние семей и доходность для акционеров.',
};

const AboutBlock = () => {
  const [isHide, setIsHide] = useState(true);
  const [mission, setMission] = useState('');

  const handleMissionClick = (text) => {
    if (isHide) {
      setIsHide(false);
      setMission(text);
      return;
    }

    setIsHide(true);

    setTimeout(() => {
      if (mission !== text) {
        setMission(text);
        setIsHide(false);
      } else {
        setMission('');
      }
    }, 1000);
  };

  return (
    <div className={`fs-5 pe-6 pt-6`}>
      <div className={'pe-6 py-1'}>
        <div className={'d-flex flex-row justify-content-between mb-4'}>
          <img
            src={logo}
            alt={'logo'}
            className={`align-self-center my-2 ${styles.AboutBlock}`}
          />
          <h3
            className={'h5 my-0 mx-2 align-self-center fw-bold text-capitalize'}
          ></h3>
          <CloseBtn />
        </div>
        <p className={''}>
          Highland Gold Mining – производитель золота с прочной репутацией,
          управляющий активами мирового класса, расположенными в России. Среди
          них проекты по добыче, освоению и геологоразведке. Компания имеет штат
          первоклассных специалистов в сфере управления и эксплуатации,
          обладающих опытом работы в России и за рубежом, а также впечатляющий
          объем запасов, прошедший аудит в соответствии с международной
          классификацией JORC.
        </p>
        <p className={''}>
          Деятельность Highland Gold сосредоточена вокруг четырёх основных
          производственных центров в Хабаровском, Камчатском и Забайкальском
          краях, а также Чукотском АО. Кроме того, компания является
          собственником активов в Киргизии.
        </p>
        <div className={'d-flex justify-content-around mt-4'}>
          <span
            className={`${styles.AboutBlock_missionBtn} ${
              mission === missions.mission &&
              styles.AboutBlock_missionBtn__checked
            }`}
            onClick={() => handleMissionClick(missions.mission)}
          >
            Видение
          </span>
          <span
            className={`${styles.AboutBlock_missionBtn} ${
              mission === missions.values &&
              styles.AboutBlock_missionBtn__checked
            }`}
            onClick={() => handleMissionClick(missions.values)}
          >
            Ценности
          </span>
        </div>
        <div
          className={`alert alert-warning mt-4 fs-4 ${
            styles.AboutBlock_alert
          } ${isHide && styles.AboutBlock_alert__hide}`}
          role='alert'
        >
          {mission}
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;