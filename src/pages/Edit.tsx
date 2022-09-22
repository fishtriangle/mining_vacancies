import { useSelector } from 'react-redux';
import React, { useRef, useState } from 'react';
import { useMutation } from '@apollo/client';

import { UPDATE_ENTERPRISE } from '../graphql/mutations/enterpriseVacancies';
import validateForm from '../utilities/validate';
import { Link } from 'react-router-dom';
import handleVacanciesFile from '../utilities/handleVacanciesFile';

const Edit: React.FC = () => {
  const enterprisesInfo = useSelector(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO state type should be written
    (state) => state.enterprisesInfo.enterprises
  );

  const fileItem = useRef<HTMLInputElement>(null);

  const [enterpriseId, setEnterpriseId] = useState<number | null>(null);
  const [enterpriseErrors, setEnterpriseErrors] = useState<string | null>(null);
  const [fileErrors, setFileErrors] = useState<string | null>(null);

  const errorsMap = {
    enterprise: setEnterpriseErrors,
    fileItem: setFileErrors,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // TODO event type should be written
  const handleSelectChange = (event) => {
    setEnterpriseId(event.target.value);
  };

  const [updateEnterprise] = useMutation(UPDATE_ENTERPRISE);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // TODO event type should be written
  const onSubmit = (event) => {
    event.preventDefault();
    Object.values(errorsMap).forEach((setError) => setError(null));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO fileItem.current type should be written
    const file = fileItem.current?.files[0];

    const errors = validateForm(enterpriseId, file);
    if (errors.length > 0) {
      errors.forEach(({ input, message }) => {
        errorsMap[input as keyof typeof errorsMap](message);
      });
      return;
    }

    handleVacanciesFile(file, enterpriseId, updateEnterprise);
  };

  return (
    <div
      className={
        'vh-100 vw-100 d-flex justify-content-center align-items-center flex-column position-absolute top-0 bg-black bg-opacity-75'
      }
    >
      <div className={'w-50 m-auto'}>
        <h2 className={'m-4 text-center'}>Обновление списка вакансий</h2>
        <form
          className={'d-flex flex-column align-items-center'}
          onSubmit={onSubmit}
        >
          <div className={'row mb-4 align-items-end'}>
            <div className={'col-5 pe-4'}>
              <label className='form-label'>Выберите предприятие:</label>
              <select
                name={'enterprise'}
                className='form-control'
                onChange={handleSelectChange}
              >
                <option value={''} className={'small'} />
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  // TODO enterprisesInfo type should be written
                  Object.values(enterprisesInfo).map(({ id, title }) => (
                    <option value={id} key={id} className={'small'}>
                      {title}
                    </option>
                  ))
                }
              </select>
              <span
                className={`fw-bold small text-danger ${
                  !enterpriseErrors && 'opacity-0'
                }`}
              >
                * {enterpriseErrors}
              </span>
            </div>
            <div className={'col-7'}>
              <label htmlFor='vacanciesFile' className='form-label'>
                Поддерживаются только CSV файлы:
              </label>
              <input className='form-control' type='file' ref={fileItem} />
              <span
                className={`fw-bold small text-danger ${
                  !fileErrors && 'opacity-0'
                }`}
              >
                * {fileErrors}
              </span>
            </div>
          </div>
          <button
            type='submit'
            className='btn bg-white px-5 text-black fw-bold'
          >
            Отправить
          </button>
          <Link to={'/'} className='small fw-bold mt-4'>
            Возврат на главную
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Edit;
