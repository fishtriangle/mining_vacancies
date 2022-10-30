import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { setImages } from '../../redux/slices/fullScreenImageSlice';
import styles from './EnterpriseBlock.module.scss';
import { setCurrentId } from '../../redux/slices/vacanciesSlice';
import { selectCurrentEnterprise } from '../../redux/slices/enterprisesSlice';
import YellowBtn from '../YellowBtn/YellowBtn';
import CloseBtn from '../CloseBtn/CloseBtn';
import { useQuery } from '@apollo/client';
import { getEnterprise, getEnterpriseVars, photo } from '../../common/types';
import { GET_ONE_ENTERPRISE } from '../../graphql/query/enterprise';
import Loader from '../Loader/Loader';

const EnterpriseBlock: React.FC = () => {
  const id = useSelector(selectCurrentEnterprise);

  const dispatch = useDispatch();

  function handleVacancies(id: number | undefined) {
    if (id) {
      dispatch(setCurrentId(id));
    }
  }

  const { data, loading, error } = useQuery<getEnterprise, getEnterpriseVars>(
    GET_ONE_ENTERPRISE,
    {
      variables: {
        pollInterval: 3000,
        id,
      },
    }
  );

  if (loading) return <Loader />;
  if (error)
    return (
      <>
        <p className={'text-center'}>
          Ошибка загрузки информации о предприятии...
        </p>
        <p>{error.message}</p>
      </>
    );

  const photos: photo[] | undefined = data?.getEnterprise.photos;

  return (
    <div className={` me-5 text-white w-100`}>
      <div className={'me-5 h-100 d-flex justify-content-center flex-column'}>
        <div className={'mb-3 block-bg h-60'}>
          <div className={'d-flex flex-row justify-content-between mb-3'}>
            {data?.getEnterprise.logo && (
              <img
                src={data?.getEnterprise.logo}
                alt={'logo'}
                className={`align-self-center my-2 me-1 ${styles.enterpriseBlock_highlandLogo}`}
              />
            )}

            <CloseBtn />
          </div>

          <div className={'add-scrollbar'}>
            {data?.getEnterprise.title && (
              <article>
                <p className={'text-uppercase text-primary fs-4 fw-bold m-0'}>
                  {data?.getEnterprise.title}
                </p>
                <p>{data?.getEnterprise.description}</p>
              </article>
            )}
          </div>
        </div>
        <div className={'mb-5 mx-3 w-90 align-self-center'}>
          {photos && photos.length > 0 && (
            <Carousel
              className={`mt-2`}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              wrapAround={true}
              slidesToShow={4}
              defaultControlsConfig={{
                pagingDotsClassName: styles.enterpriseBlock_carouselDots,
                pagingDotsContainerClassName:
                  styles.enterpriseBlock_carouselContainer,
              }}
            >
              {photos.map(
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
                    onClick={() =>
                      dispatch(
                        setImages({
                          images: data?.getEnterprise.photos,
                          currentImage: id,
                        })
                      )
                    }
                    className={'btn border-0 shadow-none'}
                  />
                )
              )}
            </Carousel>
          )}
        </div>

        <div className={'d-flex justify-content-center'}>
          <YellowBtn
            onClick={() => handleVacancies(data?.getEnterprise.id)}
            text={'Вакансии'}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterpriseBlock;
