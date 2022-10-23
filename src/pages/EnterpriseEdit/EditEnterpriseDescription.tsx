import React, { useRef, useState } from 'react';
import styles from '../Edit.module.scss';
import Carousel from 'nuka-carousel';
import { setImages } from '../../redux/slices/fullScreenImageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { UPDATE_ENTERPRISE } from '../../graphql/mutations/enterprise';
import validateForm from '../../utilities/validate';
import handleVacanciesFile from '../../utilities/handleVacanciesFile';
import { Link } from 'react-router-dom';

const EditEnterpriseDescription: React.FC = () => {
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
    <>
      <h3 className={'w-75 mb-3 mt-0'}>Редактирование описания предприятия</h3>
      <form className={'w-75'}>
        <div className={'form-group row mb-2'}>
          <label htmlFor={'enterpriseTitle'} className='col-3 col-form-label'>
            Название предприятия:
          </label>
          <div className={'col-9'}>
            <input
              id={'enterpriseTitle'}
              className={'form-control'}
              placeholder={'Напишите текст здесь...'}
            />
          </div>
        </div>

        <div className={'form-group row mb-2'}>
          <label
            htmlFor={'enterpriseDescription'}
            className='col-3 col-form-label'
          >
            Описание предприятия:
          </label>
          <div className={'col-9'}>
            <textarea
              id={'enterpriseDescription'}
              rows={3}
              placeholder={'Напишите текст здесь...'}
              className={'form-control'}
            />
          </div>
        </div>

        <div className={'form-group row mb-2'}>
          <label
            htmlFor={'enterpriseContacts'}
            className='col-3 col-form-label'
          >
            Контактная информация:
          </label>
          <div className={'col-9'}>
            <textarea
              id={'enterpriseDescription'}
              rows={2}
              placeholder={
                'Несколько контактов необходимо разделять символом ";"'
              }
              className={'form-control'}
            />
          </div>
        </div>

        <div className={'form-group row mb-4'}>
          <label htmlFor='logoFile' className='col-3 col-form-label'>
            Обновить логотип:
          </label>
          <div className={'col-4'}>
            <input
              className='form-control'
              type='file'
              // ref={fileItem}
              multiple={false}
            />
          </div>
          <div className={'col-4 ms-3 mt-1'}></div>
        </div>

        <h5>Маркер на карте</h5>
        <div className={'form-group row mb-2'}>
          <label htmlFor={'markerValue'} className='col-3 col-form-label'>
            Значение маркера:
          </label>
          <div className={'col-3'}>
            <input
              id={'markerValue'}
              className={'form-control'}
              placeholder={'Напишите текст здесь...'}
            />
          </div>
          <label
            htmlFor={'markerTop'}
            className='col-3 col-form-label ps-5 pe-2'
          >
            Координаты - ось Y:
          </label>
          <div className={'col-1'}>
            <input
              id={'markerTop'}
              className={'form-control'}
              placeholder={'Y'}
            />
          </div>
          <label className={'col-1 col-form-label ps-3'}>Ось Х:</label>
          <div className={'col-1'}>
            <input
              id={'markerLeft'}
              className={'form-control'}
              placeholder={'X'}
            />
          </div>
        </div>

        <div className={'form-group row mb-2'}>
          <legend className='col-3 col-form-label'>Угол сноски маркера:</legend>
          <div className={'col-2 my-auto '}>
            <input
              type={'radio'}
              id={'bottomRightCorner'}
              className={'me-1'}
              name={'corner'}
              value={'bottom-right'}
            />
            <label htmlFor={'bottomRightCorner'}>Снизу-справа</label>
          </div>
          <div className={'col-2 my-auto'}>
            <input
              type={'radio'}
              id={'bottomLeftCorner'}
              className={'me-1'}
              name={'corner'}
              value={'bottom-left'}
            />
            <label htmlFor={'bottomLeftCorner'}>Снизу-слева</label>
          </div>
          <div className={'col-2 my-auto'}>
            <input
              type={'radio'}
              id={'topRightCorner'}
              className={'me-1'}
              name={'corner'}
              value={'top-right'}
            />
            <label htmlFor={'topRightCorner'}>Сверху-справа</label>
          </div>
          <div className={'col-2 my-auto'}>
            <input
              type={'radio'}
              id={'topLeftCorner'}
              className={'me-1'}
              name={'corner'}
              value={'top-left'}
            />
            <label htmlFor={'topLeftCorner'}>Сверху-слева</label>
          </div>
        </div>

        <div className={'mb-2 d-flex justify-content-center'}>
          <button type={'submit'} className={'btn bg-warning fw-bold me-4'}>
            Опубликовать
          </button>
          <Link
            to={'/edit/enterprise'}
            className={'btn btn-outline-warning text-warning'}
          >
            Отмена
          </Link>
        </div>
      </form>
    </>
  );
};

export default EditEnterpriseDescription;
