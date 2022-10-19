import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CreateNews: React.FC = () => {
  const fileItem = useRef<HTMLInputElement>(null);

  return (
    <>
      <h3 className={'w-75 mb-4'}>Создание новости</h3>
      <form className={'w-75'}>
        <div className={'form-group row mb-2'}>
          <label className='col-3 col-form-label'>Дата публикации:</label>
          <div className={'col-3'}>
            <input type={'date'} className={'form-control'} />
          </div>
        </div>

        <div className={'form-group row mb-2'}>
          <label htmlFor={'newsTitle'} className='col-3 col-form-label'>
            Заголовок новости:
          </label>
          <div className={'col-9'}>
            <input
              id={'newsTitle'}
              className={'form-control'}
              placeholder={'Напишите текст здесь...'}
            />
          </div>
        </div>

        <div className={'form-group row mb-2'}>
          <label htmlFor='newsBody' className='col-3 col-form-label'>
            Текст новости:
          </label>
          <div className={'col-9'}>
            <textarea
              id={'newsBody'}
              rows={5}
              placeholder={'Напишите текст здесь...'}
              className={'form-control'}
            />
          </div>
        </div>

        <div className={'form-group row mb-4'}>
          <label htmlFor='photoFiles' className='col-3 col-form-label'>
            Фотографии:
          </label>
          <div className={'col-4'}>
            <input
              className='form-control'
              type='file'
              ref={fileItem}
              multiple={true}
            />
          </div>
          <div className={'col-4 ms-3 mt-1'}>
            jpg или png, не менее 1920*1080px
          </div>
        </div>

        <div className={'form-group row mb-2'}>
          <button
            type={'submit'}
            className={'btn btn-lg form-control bg-warning fw-bold'}
          >
            Опубликовать
          </button>
        </div>
        <div className={'d-flex justify-content-center'}>
          <Link
            to={'/edit/news'}
            className={'btn bg-none text-primary border-0 shadow-none mx-auto'}
          >
            Отмена
          </Link>
        </div>
      </form>
    </>
  );
};

export default CreateNews;
