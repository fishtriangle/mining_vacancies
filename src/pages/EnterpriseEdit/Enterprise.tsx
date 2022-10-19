import React, { useRef, useState } from 'react';
import styles from '../Edit.module.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const Enterprise: React.FC = () => {
  return (
    <>
      <form className={'w-75'}>
        <div className={'form-group row'}>
          <div className={'col-4'}>
            <button
              type={'button'}
              className='btn bg-warning px-5 text-black fw-bold'
            >
              Новое предприятие
            </button>
          </div>
        </div>
        <hr />
      </form>

      <div className={`w-75 ${styles.editPage_tableContainer}`}>
        <table className={'table text-primary border-primary'}>
          <thead>
            <tr>
              <th scope={'col'}>#</th>
              <th scope={'col'}>Наименование</th>
              <th scope={'col'}></th>
            </tr>
          </thead>

          <tbody className={'overflow-auto'}>
            {_.fill(Array(20), 2).map((_, index) => (
              <tr key={index}>
                <td scope={'row'}>{index + 1}</td>
                <td>Предприятие {index}</td>
                <td className={'d-flex flex-row justify-content-end'}>
                  <Link
                    to={`/edit/enterprise/${index + 1}`}
                    className='btn btn-sm bg-white text-black fw-bold me-3'
                  >
                    Изменить
                  </Link>
                  <Link
                    to={`/edit/enterprise/${index + 1}/vacancies`}
                    className='btn btn-sm bg-white text-black fw-bold me-3'
                  >
                    Вакансии
                  </Link>
                  <Link
                    to={`/edit/enterprise/${index + 1}/photo`}
                    className='btn btn-sm bg-white text-black fw-bold me-3'
                  >
                    Фотографии
                  </Link>
                  <button
                    type='button'
                    className='btn btn-sm bg-warning text-black fw-bold'
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Enterprise;
