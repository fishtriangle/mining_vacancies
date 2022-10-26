import React, { useRef, useState } from 'react';
import styles from '../Edit.module.scss';
import Carousel from 'nuka-carousel';
import { setImages } from '../../redux/slices/fullScreenImageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_ENTERPRISE } from '../../graphql/mutations/enterprise';
// import validateForm from '../../utilities/validate';
import handleVacanciesFile from '../../utilities/handleVacanciesFile';
import { Link, useParams } from 'react-router-dom';
import { getEnterprise, getEnterpriseVars } from '../../common/types';
import { GET_ONE_ENTERPRISE } from '../../graphql/query/enterprise';
import Loader from '../../components/Loader/Loader';
import { readFile } from '../../utilities/filesInteractions';

const Enterprise: React.FC = () => {
  const id = Number(useParams().id);

  const photoFileItems = useRef<HTMLInputElement>(null);

  const { data, loading, error, refetch } = useQuery<
    getEnterprise,
    getEnterpriseVars
  >(GET_ONE_ENTERPRISE, {
    variables: {
      pollInterval: 3000,
      id,
    },
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <>
        <p className={'text-center'}>Ошибка загрузки списка фотографий...</p>
        <p>{error.message}</p>
      </>
    );

  const handleSendPhoto = (event: React.FormEvent<HTMLFormElement>) => {
    const photos: (string | ArrayBuffer)[] | null = null;
    event.preventDefault();
    const files = photoFileItems.current?.files;
    console.log(files?.length);
    if (files) {
      // photos = files.map(async (file) => (await readFile(file)))
      //   ;
      // console.log(typeof base64File);
      // if (typeof base64File === 'string') {
      // const newFile = dataURLtoFile(base64File, '1.jpg');
      // console.log(newFile);
      // setTest(URL.createObjectURL(newFile));
      // }
    }

    //   const input = {
    //     id,
    //     title: title || undefined,
    //     logo: logo || undefined,
    //     description: description || undefined,
    //     contacts: contacts || undefined,
    //     marker:
    //       markerValue || markerTop || markerLeft || markerCorner
    //         ? {
    //             value: markerValue || undefined,
    //             top: Number(markerTop) || undefined,
    //             left: Number(markerLeft) || undefined,
    //             corner: markerCorner || undefined,
    //           }
    //         : undefined,
    //   };
    //
    //   updateEnterprise({
    //     variables: { input },
    //   })
    //     .then(({ data }) => {
    //       refetch().catch((e) => console.error(e));
    //       alert(JSON.stringify(data.updateEnterprise.content));
    //     })
    //     .catch((e) => console.error(e));
  };

  return (
    <>
      <form className={'w-75 mx-auto'} onSubmit={handleSendPhoto}>
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
                ref={photoFileItems}
                multiple={true}
              />
            </div>
          </div>

          <div className={'row'}>
            <button
              type='submit'
              className='btn bg-white px-5 text-black fw-bold col-3 mt-3'
            >
              Загрузить
            </button>
          </div>
        </fieldset>
      </form>
      <hr />

      {data?.getEnterprise.photos ?? (
        <form className={'w-75 mx-auto'}>
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
                  {data?.getEnterprise.photos.map(
                    ({
                      id,
                      small,
                      alt,
                    }: {
                      id: number;
                      small?: string;
                      alt?: string;
                    }) => (
                      <img
                        src={small}
                        alt={alt}
                        key={id}
                        width={'200px'}
                        // onClick={() =>
                        //   dispatch(
                        //     setImages({ images: photos, currentImage: index })
                        //   )
                        // }
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
      )}
    </>
  );
};

export default Enterprise;
