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

const Enterprise: React.FC = () => {
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
    <form onSubmit={onSubmit} className={'w-75 mx-auto'}>
      <fieldset className={'form-group mb-4'}>
        <legend>Загрузка фотографий</legend>
        <div className={'row'}>
          <label htmlFor='photoFiles' className='col-8 col-form-label'>
            Формат фотографий: jpg или png; размер: не менее 1920x1080px
          </label>
        </div>

        <div className={'row'}>
          <div className={'col-8'}>
            <input
              className='form-control col-8'
              type='file'
              ref={fileItem}
              multiple={true}
            />
          </div>
        </div>
        {/*<div className={'col-2'}>*/}
        {/*  <span*/}
        {/*    className={`fw-bold small text-danger ${*/}
        {/*      !fileErrors && 'opacity-0'*/}
        {/*    }`}*/}
        {/*  >*/}
        {/*    * {fileErrors}*/}
        {/*  </span>*/}
        {/*</div>*/}

        <div className={'row'}>
          <button
            type='button'
            className='btn bg-white px-5 text-black fw-bold col-3 mt-3'
          >
            Загрузить
          </button>
        </div>
      </fieldset>
      <hr />
      <fieldset className={'form-group'}>
        <legend>Удаление фотографий</legend>
        <div className={'row'}>
          <div
            className={`col-12 my-0 mx-0 align-self-center ${styles.editPage_carouselContainer}`}
          >
            <Carousel
              className={`mt-2`}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              wrapAround={true}
              slidesToShow={8}
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
                    onClick={() =>
                      dispatch(
                        setImages({ images: photos, currentImage: index })
                      )
                    }
                    className={'btn border-0 shadow-none'}
                  />
                )
              )}
            </Carousel>
          </div>
        </div>
        <div className={'row'}>
          <button
            type='button'
            className='btn bg-warning px-5 text-black fw-bold col-3 me-3'
          >
            Удалить
          </button>
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

export default Enterprise;
