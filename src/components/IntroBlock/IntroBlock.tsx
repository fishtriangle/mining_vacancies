import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import YellowBtn from '../YellowBtn/YellowBtn';
import {
  hideRightBlock,
  setAbout,
  showRightBlock,
} from '../../redux/slices/rightBlockSlice';
import logo from './logo.png';
import styles from './IntroBlock.module.scss';

const IntroBlock: React.FC = () => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(hideRightBlock());
    setTimeout(() => {
      dispatch(setAbout());
      dispatch(showRightBlock());
    }, 1500);
  }
  return (
    <div className={`py-6 px-5 d-flex align-items-center`}>
      <div className={`p-2 rounded-2 ${styles.IntroBlock}`}>
        <img
          src={logo}
          alt={'logo'}
          className={`align-self-center mb-2 ${styles.IntroBlock_logo}`}
        />
        <p className={''}>Ты готов участвовать в масштабных проектах?</p>
        <p className={''}>
          Тебя драйвят новые амбициозные цели и интересные задачи?
        </p>
        <p className={''}>
          Ты хочешь быть частью команды, нацеленной на успех?
        </p>
        <p className={''}>
          Прямо сейчас у тебя есть возможность построить Компанию будущего
          вместе с нами. Присоединяйся!
        </p>
        <p className={'fw-bold'}>Мы предлагаем:</p>
        <ul style={{ listStyleType: 'none' }}>
          <li>- стабильный высокий доход;</li>
          <li>- работу в команде настоящих профессионалов;</li>
          <li>- карьерный рост;</li>
          <li>- комфортные социально-бытовые условия;</li>
          <li>- бонусы и социальные гарантии.</li>
        </ul>
        <p className={'fw-bold mb-3'}>
          Выбирай предприятие, жми на кнопку{' '}
          <Link to={'edit'} className={'text-decoration-none'}>
            «Вакансии»
          </Link>{' '}
          — и стань частью нашей команды!
        </p>
        <div className={'d-flex justify-content-center'}>
          <YellowBtn text={'О компании'} onClick={() => handleClick()} />
        </div>
      </div>
    </div>
  );
};

export default IntroBlock;
