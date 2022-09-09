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

const btnLabel = {
  vacancies: 'вакансии',
  contacts: 'контакты',
};

function VacanciesBlock() {
  const dispatch = useDispatch();

  const isVacanciesShown = useSelector(selectIsVacanciesShown);
  const { title, contacts } = useSelector(selectCurrentEnterprise);

  const [dataBlockType, setDataBlockType] = useState('вакансии');

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
        <div className={'d-flex justify-content-between'}>
          <div className={styles.VacanciesList_btnContainer}>
            <YellowBtn
              text={
                dataBlockType === btnLabel.vacancies
                  ? btnLabel.contacts
                  : btnLabel.vacancies
              }
              onClick={() => handleContactsClick()}
            />
          </div>
          <h3
            className={
              'h1 text-uppercase align-self-center mb-5 fw-bold text-center'
            }
          >
            Вакантные должности
            <br /> {title}
          </h3>
          <CloseBtn closeAction={() => dispatch(resetVacancies())} />
        </div>

        {dataBlockType === 'контакты' && (
          <>
            <div className={'fs-4 text-center my-6'}>
              <p>По вопросам трудоустройства обращаться по телефону: </p>
              <ul className={'list-unstyled'}>
                {contacts.map((contact, index) => (
                  <li key={index} className={'fw-bold'}>
                    {contact}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {dataBlockType === 'вакансии' && (
          <>
            <div
              className={`overflow-hidden ${styles.VacanciesList_tableHead}`}
            >
              <table className={'table fs-4 text-primary border-0'}>
                <thead>
                  <tr>
                    <th scope={'col'}>#</th>
                    <th scope={'col'}>Вакансия</th>
                    <th scope={'col'}>Требования к кандидату</th>
                    <th scope={'col'}>Необходимые документы</th>
                    <th scope={'col'}>Заработная плата</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className={styles.VacanciesList_tableBody}>
              <VacanciesList />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default VacanciesBlock;
