import React, { useRef, useState } from 'react';
import styles from '../Edit.module.scss';
import Carousel from 'nuka-carousel';
import { setImages } from '../../redux/slices/fullScreenImageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { UPDATE_ENTERPRISE } from '../../graphql/mutations/enterpriseVacancies';
import validateForm from '../../utilities/validate';
import handleVacanciesFile from '../../utilities/handleVacanciesFile';
import { Link } from 'react-router-dom';

const EditEnterpriseVacancies: React.FC = () => {
  const enterprisesInfo = useSelector(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO state type should be written
    (state) => state.enterprisesInfo.enterprises
  );

  const dispatch = useDispatch();

  const { photos } = enterprisesInfo.ametist;

  const fileItem = useRef<HTMLInputElement>(null);

  const [enterpriseId, setEnterpriseId] = useState<string | null>(null);
  const [enterpriseErrors, setEnterpriseErrors] = useState<string | null>(null);
  const [fileErrors, setFileErrors] = useState<string | null>(null);

  const errorsMap = {
    enterprise: setEnterpriseErrors,
    fileItem: setFileErrors,
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id: string = event.target.value;
    setEnterpriseId(id);
  };

  const [updateEnterprise] = useMutation(UPDATE_ENTERPRISE);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Object.values(errorsMap).forEach((setError) => setError(null));

    const file = fileItem.current?.files?.[0];

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
    <form onSubmit={onSubmit} className={'w-50 mx-auto mt-6'}>
      <fieldset className={'form-group'}>
        <legend className={'mb-4'}>Обновление списка вакансий</legend>
        <div className={'row mb-4'}>
          <label htmlFor='vacanciesFile' className='col-5 col-form-label'>
            Только CSV файлы:
          </label>
          <div className={'col-7'}>
            <input className='form-control' type='file' ref={fileItem} />
          </div>
          {/*<span*/}
          {/*  className={`fw-bold small text-danger ${*/}
          {/*    !fileErrors && 'opacity-0'*/}
          {/*  }`}*/}
          {/*>*/}
          {/*  * {fileErrors}*/}
          {/*</span>*/}
        </div>
        <div className={'row '}>
          <div className={'col-4'}>
            <button
              type='button'
              className='btn btn-warning px-5 text-black fw-bold me-3'
            >
              Отправить
            </button>
          </div>
          <div className={'col-4'}>
            <Link
              to={'/edit/enterprise'}
              className={'btn btn-outline-warning text-warning px-5'}
            >
              Отмена
            </Link>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default EditEnterpriseVacancies;
