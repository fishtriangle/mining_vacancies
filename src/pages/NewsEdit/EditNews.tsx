import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../Edit.module.scss';

import Carousel from 'nuka-carousel';

import { useSelector } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const EditNews: React.FC = () => {
  // const { id } = useParams();

  const enterprisesInfo = useSelector(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO state type should be written
    (state) => state.enterprisesInfo.enterprises
  );

  const { photos } = enterprisesInfo.ametist;

  return (
    <>
      <h3 className={'w-75 mb-4 mt-0'}>Редактирование новости</h3>
      <form className={'w-75'}>
        <div className={'form-group row mb-2'}>
          <label className='col-3 col-form-label'>Дата публикации:</label>
          <div className={'col-2'}>
            <input type={'date'} className={'form-control'} />
          </div>
          <label htmlFor={'newsTitle'} className='ps-4 col-3 col-form-label'>
            Заголовок новости:
          </label>
          <div className={'col-4'}>
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
              rows={4}
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
              // ref={fileItem}
              multiple={true}
            />
          </div>
          <div className={'col-4 ms-3 mt-1'}>
            jpg или png, не менее 1920*1080px
          </div>
        </div>

        <fieldset className={'form-group row'}>
          <legend>Удаление фотографий</legend>
          <div
            className={`col-9 my-0 mx-0 align-self-center ${styles.editPage_carouselContainer}`}
          >
            <Carousel
              className={`mt-2`}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              wrapAround={true}
              slidesToShow={6}
              defaultControlsConfig={{
                pagingDotsClassName: styles.editPage_carouselDots,
                pagingDotsContainerClassName:
                  styles.editPage_carouselDotsContainer,
              }}
            >
              {photos.map(
                (
                  { small, alt }: { small: string; alt: string },
                  index: number
                ) => (
                  <img
                    src={small}
                    alt={alt}
                    key={index}
                    width={'200px'}
                    className={'btn border-0 shadow-none'}
                  />
                )
              )}
            </Carousel>
          </div>
          <div className='col-3'>
            <button
              type='button'
              className='btn btn-sm bg-warning px-5 text-black fw-bold mt-4 ms-5'
            >
              Удалить
            </button>
          </div>
        </fieldset>

        <div className={'mb-2 d-flex justify-content-center'}>
          <button
            type={'submit'}
            className={'btn btn-lg bg-warning fw-bold me-4'}
          >
            Опубликовать
          </button>
          <Link
            to={'/edit/news'}
            className={'btn btn-lg btn-outline-warning text-warning'}
          >
            Отмена
          </Link>
        </div>
      </form>
    </>
  );
};

export default EditNews;
