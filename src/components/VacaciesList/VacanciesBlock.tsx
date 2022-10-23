import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';

import styles from './VacanciesBlock.module.scss';
import {
  resetVacancies,
  selectIsVacanciesShown,
  showVacancies,
} from '../../redux/slices/vacanciesSlice';
import VacanciesList from './VacanciesList';
import { selectCurrentEnterprise } from '../../redux/slices/enterprisesSlice';
import YellowBtn from '../YellowBtn/YellowBtn';
import CloseBtn from '../CloseBtn/CloseBtn';
import Text from '../Text/Text';

const btnLabel = {
  vacancies: 'вакансии',
  contacts: 'контакты',
};

const VacanciesBlock: React.FC = () => {
  const dispatch = useDispatch();

  const isVacanciesShown = useSelector(selectIsVacanciesShown);
  const { title, contacts } = useSelector(selectCurrentEnterprise);

  const [dataBlockType, setDataBlockType] = useState<string>('вакансии');

  useEffect(() => {
    setTimeout(() => dispatch(showVacancies()), 0);
  });

  const handleContactsClick = () => {
    setDataBlockType(
      dataBlockType === btnLabel.vacancies
        ? btnLabel.contacts
        : btnLabel.vacancies
    );
  };

  return (
    <div
      className={`vw-100 vh-100 position-absolute top-0 overflow-hidden d-flex flex-column p-6 ${styles.VacanciesList}`}
    >
      <div
        className={`w-100 h-100 position-absolute top-0 overflow-hidden bg-black align-self-center`}
      />
      <div
        className={`${styles.VacanciesList_content} ${
          isVacanciesShown && styles.VacanciesList_content__show
        }`}
      >
        <div className={styles.VacanciesList_btnContainer}>
          <YellowBtn
            text={
              dataBlockType === btnLabel.vacancies
                ? btnLabel.contacts
                : btnLabel.vacancies
            }
            style={{ minWidth: '320px' }}
            onClick={() => handleContactsClick()}
          />
        </div>
        <div className={'d-flex justify-content-center'}>
          <h3
            className={
              'h1 text-uppercase align-self-center mb-5 fw-bold text-center flex-grow-1'
            }
          >
            Вакантные должности
            <br />
            <Text>{title}</Text>
          </h3>
          <CloseBtn
            closeAction={() => dispatch(resetVacancies())}
            classNames={''}
          />
        </div>

        {dataBlockType === 'контакты' && (
          <>
            <div className={'fs-4 my-6 m-auto w-70'}>
              {contacts.length === 1 ? (
                <p>По вопросам трудоустройства обращаться по телефону: </p>
              ) : (
                <p>По вопросам трудоустройства обращаться по телефонам: </p>
              )}

              <ul className={'list-unstyled'}>
                {contacts.map((contact: string, index: number) => (
                  <li key={index} className={'fw-bold'}>
                    {contact}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {dataBlockType === 'вакансии' && (
          <div className={styles.VacanciesList_table}>
            <VacanciesList />
          </div>
        )}
      </div>
    </div>
  );
};

export default VacanciesBlock;